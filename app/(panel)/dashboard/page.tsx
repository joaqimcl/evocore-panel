// app/(panel)/dashboard/page.tsx
'use client'
import React from 'react'
import { ArrowUpRight, MessageSquare, Users, Zap } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      
      {/* Bienvenida */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Resumen General</h1>
        <p className="text-gray-500">Bienvenido de vuelta, Bar EvoCore.</p>
      </div>

      {/* Tarjetas de Métricas (KPIs) */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-10">
        
        {/* Tarjeta 1 */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Conversaciones Hoy</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">42</p>
            </div>
            <div className="rounded-lg bg-blue-50 p-3 text-blue-600">
              <MessageSquare className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-green-600">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            <span>+12% vs ayer</span>
          </div>
        </div>

        {/* Tarjeta 2 */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Clientes Potenciales</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">15</p>
            </div>
            <div className="rounded-lg bg-purple-50 p-3 text-purple-600">
              <Users className="h-6 w-6" />
            </div>
          </div>
          <div className="mt-4 flex items-center text-xs font-medium text-green-600">
            <ArrowUpRight className="h-3 w-3 mr-1" />
            <span>+4 nuevos hoy</span>
          </div>
        </div>

        {/* Tarjeta 3 */}
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500">Tiempo Ahorrado</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">5.2 hrs</p>
            </div>
            <div className="rounded-lg bg-green-50 p-3 text-green-600">
              <Zap className="h-6 w-6" />
            </div>
          </div>
          <p className="mt-4 text-xs text-gray-400">Estimado por IA esta semana</p>
        </div>
      </div>

      {/* Estado de los Servicios */}
      <h2 className="text-lg font-bold text-gray-900 mb-4">Estado del Sistema</h2>
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-6 flex items-center justify-between border-b border-gray-50 hover:bg-gray-50 transition-colors">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
              WA
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Agente WhatsApp Principal</h3>
              <p className="text-sm text-gray-500">+56 9 1234 5678</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-sm font-medium text-green-700">En Línea</span>
          </div>
        </div>
      </div>

    </div>
  )
}