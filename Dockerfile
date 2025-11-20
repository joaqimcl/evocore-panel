FROM node:20-alpine AS base

# 1. Instalar dependencias
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiamos los archivos de definición de paquetes primero
COPY package.json package-lock.json* ./
RUN npm ci

# 2. Construir el proyecto
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
# ¡IMPORTANTE! Copiamos todo el código fuente aquí
COPY . .

# Desactivamos telemetría
ENV NEXT_TELEMETRY_DISABLED=1

# Construimos el proyecto
RUN npm run build

# 3. Imagen de producción
FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiamos los archivos necesarios desde el builder
COPY --from=builder /app/public ./public

# ¡OJO! Asegúrate de que estas carpetas existan
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Copiamos la carpeta scripts para poder ejecutarla después
COPY --from=builder --chown=nextjs:nodejs /app/scripts ./scripts

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]