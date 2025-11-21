// app/(panel)/asistentes/page.tsx
'use client'

import React from 'react'
import { Bot, Play, Pause, Settings, MessageSquare, BarChart3 } from 'lucide-react'

export default function AsistentesPage() {
  return (
    <div className="p-8 bg-gray-50 min-h-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Mis Asistentes IA</h1>
        <p className="text-gray-500">Gestiona y monitorea tus agentes activos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tarjeta de Bot Principal */}
        <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
          <div className="p-6 border-b border-gray-100 flex justify-between items-start">
            <div className="flex gap-4">
              <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-200">
                <Bot className="h-7 w-7" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Agente Principal</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-700 mt-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse"></span>
                  Activo
                </span>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <Settings className="h-5 w-5" />
            </button>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
                <p className="text-xs text-gray-500 uppercase font-bold">Chats Hoy</p>
                <p className="text-xl font-bold text-gray-900">142</p>
              </div>
              <div className="rounded-lg bg-gray-50 p-3 border border-gray-100">
                <p className="text-xs text-gray-500 uppercase font-bold">Resolución</p>
                <p className="text-xl font-bold text-gray-900">94%</p>
              </div>
            </div>
            
            <div className="space-y-2">
               <p className="text-xs text-gray-500 font-medium uppercase">Canales Conectados</p>
               <div className="flex gap-2">
                  <div className="px-3 py-1.5 bg-green-50 text-green-700 rounded-md text-xs font-medium flex items-center gap-2 border border-green-100">
                    WhatsApp API
                  </div>
               </div>
            </div>
          </div>

          <div className="p-4 bg-gray-50 border-t border-gray-200 flex gap-3">
             <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-white border border-gray-300 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
                <MessageSquare className="h-4 w-4" /> Ver Chats
             </button>
             <button className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-black py-2 text-sm font-medium text-white hover:bg-gray-800">
                <BarChart3 className="h-4 w-4" /> Reportes
             </button>
          </div>
        </div>

        {/* Tarjeta "Nuevo Bot" (Upsell) */}
        <div className="bg-gray-50 rounded-xl border-2 border-dashed border-gray-300 flex flex-col items-center justify-center p-8 text-center hover:border-green-500 hover:bg-green-50/50 transition-all cursor-pointer group">
          <div className="h-12 w-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-400 mb-4 group-hover:text-green-500 group-hover:border-green-500 transition-colors">
            <span className="text-2xl font-light">+</span>
          </div>
          <h3 className="font-medium text-gray-900">Crear Nuevo Agente</h3>
          <p className="text-sm text-gray-500 mt-1">Añade automatización a otro proceso</p>
        </div>

      </div>
    </div>
  )
}