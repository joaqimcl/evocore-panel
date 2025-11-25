// app/(panel)/crm/page.tsx
'use client'

import React from 'react'
import { Search, Filter, MoreHorizontal, SlidersHorizontal, Plus } from 'lucide-react'

// Datos simulados basados en tu imagen
const clients = [
  { 
    id: 1, 
    name: 'Ignacio Muñoz Agurto', 
    creation: '14-11-2025', 
    channel: 'whatsapp', 
    email: '-', 
    phone: '56933074736' 
  },
  // Puedes agregar más aquí para probar
]

export default function CRMPage() {
  return (
    <div className="flex h-full flex-col bg-white">
      
      {/* Header Superior */}
      <div className="border-b border-gray-200 px-8 py-5 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg text-white">
             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
          </div>
          <div>
             <h1 className="text-lg font-bold text-gray-900">Todos los clientes</h1>
             <p className="text-xs text-gray-500">Administra y ve tus clientes</p>
          </div>
        </div>
        <div className="flex gap-2">
             <button className="text-sm text-blue-600 hover:underline flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 16h5v5"/></svg>
                Limpiar filtros
             </button>
             <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-50">
                <SlidersHorizontal className="h-4 w-4 text-gray-600" />
             </button>
        </div>
      </div>

      <div className="p-8 bg-gray-50 flex-1">
        <p className="text-xs text-gray-500 mb-4">Mostrando 1 de 1 clientes</p>
        
        {/* Barra de Búsqueda y Columnas */}
        <div className="flex justify-between mb-4">
           <div className="relative w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-blue-400" />
              <input 
                type="text" 
                placeholder="Buscar clientes..." 
                className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
           </div>
           <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-md text-sm text-gray-600 hover:bg-gray-50 shadow-sm">
              <Filter className="h-4 w-4" /> Columnas
           </button>
        </div>

        {/* Tabla (Estilo Vambe) */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full text-left">
                <thead className="bg-white border-b border-gray-200">
                    <tr>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500">Nombre</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500">Creación</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500">Canales</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500">Correo electrónico</th>
                        <th className="px-6 py-4 text-xs font-semibold text-gray-500">Teléfono</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {clients.map((client) => (
                        <tr key={client.id} className="hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm text-gray-900">{client.name}</td>
                            <td className="px-6 py-4 text-sm text-gray-500">{client.creation}</td>
                            <td className="px-6 py-4">
                                {/* Ícono de WhatsApp con el '1' azul */}
                                <div className="relative w-fit">
                                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-green-600"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-600 text-white text-[9px] flex items-center justify-center rounded-full border-2 border-white">1</div>
                                </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-gray-500">{client.email}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{client.phone}</td>
                            <td className="px-6 py-4 text-right">
                                <button className="text-gray-400 hover:text-gray-600">
                                    <MoreHorizontal className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

        <div className="mt-8">
             <button className="flex items-center gap-2 text-blue-600 font-medium hover:underline text-sm">
                <Plus className="h-4 w-4" /> Crear vista
             </button>
        </div>
      </div>
    </div>
  )
}