// app/login/page.tsx
'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
// === IMPORTAMOS EL ÍCONO DE FLECHA ===
import { Lock, Mail, Loader2, Eye, EyeOff, ArrowLeft } from 'lucide-react' 

export default function LoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Error al iniciar sesión')
      }

      router.push('/dashboard') 

    } catch (err: any) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen w-full bg-white relative"> {/* relative para posicionar el botón */}
      
      {/* === NUEVO BOTÓN: VOLVER AL SITIO === */}
      <div className="absolute top-6 left-6 z-20">
        <Link 
            href="https://evoore.cloud" // Enlace absoluto a tu web principal
            className="flex items-center text-sm font-medium text-gray-500 hover:text-green-600 transition-colors"
        >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al inicio
        </Link>
      </div>
      {/* =================================== */}

      {/* === COLUMNA IZQUIERDA: FORMULARIO === */}
      <div className="flex w-full flex-col justify-center px-8 sm:px-12 lg:w-1/2 xl:px-24 bg-white z-10">
        <div className="mx-auto w-full max-w-sm mt-10"> {/* mt-10 para dar espacio al botón de volver */}
          
          {/* Logo */}
          <div className="mb-8 block w-fit">
             <h1 className="text-3xl font-bold text-gray-900 flex items-center gap-1">
                EvoCore<span className="text-green-500">.</span>
             </h1>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Bienvenido 👋</h2>
          <p className="mt-2 text-gray-500">Ingresa tus credenciales para acceder a tu panel de control.</p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            
            {/* Email */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Correo electrónico</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-3 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm transition-all"
                  placeholder="nombre@empresa.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>
            </div>

            {/* Contraseña */}
            <div>
              <label className="mb-1.5 block text-sm font-medium text-gray-700">Contraseña</label>
              <div className="relative">
                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type={showPassword ? "text" : "password"}
                  required
                  className="block w-full rounded-lg border border-gray-300 bg-white py-3 pl-10 pr-10 text-gray-900 placeholder-gray-400 focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 sm:text-sm transition-all"
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={(e) => setFormData({...formData, password: e.target.value})}
                />
                <button 
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
              <div className="mt-2 flex justify-end">
                <a href="#" className="text-sm font-medium text-green-600 hover:text-green-500">
                  ¿Olvidaste tu contraseña?
                </a>
              </div>
            </div>

            {error && (
              <motion.div 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                className="rounded-md bg-red-50 p-3 text-sm text-red-600 border border-red-100 text-center"
              >
                {error}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full flex justify-center items-center rounded-lg bg-green-500 py-3 text-sm font-bold text-black hover:bg-green-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-green-500/20 transition-all"
            >
              {loading ? <Loader2 className="h-5 w-5 animate-spin" /> : 'Acceder al Panel'}
            </button>

          </form>

          <p className="mt-8 text-center text-sm text-gray-500">
            ¿No tienes una cuenta?{' '}
            <Link href="https://evoore.cloud/demo" className="font-medium text-green-600 hover:text-green-500 hover:underline">
              Solicita acceso aquí
            </Link>
          </p>
        </div>
      </div>

      {/* === COLUMNA DERECHA: BRANDING === */}
      <div className="hidden lg:flex lg:w-1/2 lg:flex-col lg:justify-center lg:items-center relative bg-gray-900 overflow-hidden">
        
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 rounded-full bg-green-500/20 blur-[100px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 rounded-full bg-green-500/10 blur-[100px]"></div>

        <div className="relative z-10 text-center px-12 w-full max-w-lg flex flex-col items-center">
           
           {/* IMAGEN DEL DASHBOARD */}
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="mb-10 relative w-full transform rotate-2 hover:rotate-0 transition-transform duration-500"
           >
              <div className="absolute inset-0 bg-green-500/30 blur-2xl -z-10 rounded-xl"></div>
              <Image 
                src="/login-dashboard.png" 
                alt="Vista previa del panel EvoCore"
                width={600}
                height={400}
                className="rounded-xl shadow-2xl border border-gray-800 w-full h-auto object-cover"
                priority
              />
           </motion.div>

           <h2 className="text-3xl font-bold text-white mb-4">Control Total de tu Negocio</h2>
           <p className="text-gray-300 text-lg">
             Gestiona tus conversaciones, revisa tus métricas y optimiza tu atención al cliente en un solo lugar.
           </p>
        </div>
      </div>

    </div>
  )
}