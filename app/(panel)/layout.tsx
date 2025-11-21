// app/(panel)/layout.tsx
'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutGrid,     // Para Resumen
  MessageSquare,  // Para Chat
  Bot,            // Para Servicios
  Store,          // Para Mi Negocio
  Settings,       // Para Configuración
  LogOut 
} from 'lucide-react'

const Sidebar = () => {
  const pathname = usePathname();

  // === NUEVO MAPA DE NAVEGACIÓN ===
  const navLinks = [
    { name: 'Resumen', href: '/dashboard', icon: LayoutGrid },
    { name: 'Conversaciones', href: '/chat', icon: MessageSquare },
    { name: 'Mis Servicios', href: '/servicios', icon: Bot },
    { name: 'Mi Negocio', href: '/negocio', icon: Store },
  ];

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-gray-900 text-white border-r border-gray-800">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center px-6 border-b border-gray-800">
          <span className="text-xl font-bold">EvoCore<span className="text-green-500">.</span></span>
        </div>
        
        {/* Navegación */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {navLinks.map((link) => {
            const isActive = pathname.startsWith(link.href);
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`flex items-center space-x-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all
                  ${isActive
                    ? 'bg-green-500 text-black shadow-lg shadow-green-900/20' // Estilo Activo
                    : 'text-gray-400 hover:bg-gray-800 hover:text-white' // Estilo Inactivo
                  }`}
              >
                <link.icon className={`h-5 w-5 ${isActive ? 'text-black' : 'text-gray-400'}`} />
                <span>{link.name}</span>
              </Link>
            );
          })}
        </nav>

        {/* Footer del Sidebar */}
        <div className="border-t border-gray-800 p-4">
          <button className="flex w-full items-center space-x-3 rounded-lg px-3 py-2 text-sm font-medium text-gray-400 hover:bg-gray-800 hover:text-white transition-colors">
            <LogOut className="h-5 w-5" />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default function PanelLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 ml-64 overflow-y-auto">
        {children}
      </main>
    </div>
  )
}