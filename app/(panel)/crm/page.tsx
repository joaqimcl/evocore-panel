// app/(panel)/crm/page.tsx
'use client'

import React from 'react'
import { Search, Filter, Download, MoreHorizontal, User, Phone, Calendar } from 'lucide-react'

// Datos falsos para diseñar
const contacts = [
  { id: 1, name: 'Ignacio Muñoz', phone: '+56 9 1234 5678', status: 'Cliente', lastContact: 'Hace 10 min', tags: ['VIP', 'Reservas'] },
  { id: 2, name: 'Ana Pérez', phone: '+56 9 8765 4321', status: 'Nuevo', lastContact: 'Ayer', tags: ['Lead'] },
  { id: 3, name: 'Carlos Díaz', phone: '+56 9 1122 3344', status: 'Inactivo', lastContact: 'Hace 1 semana', tags: [] },
  { id: 4, name: 'Maria Gonzalez', phone: '+56 9 5566 7788', status: 'Cliente', lastContact: 'Hoy 09:00', tags: ['Delivery'] },
]

export default function CRMPage() {
  return (
    <div className="flex h-full flex-col bg-gray-50 p-8">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Contactos</h1>
          <p className="text-sm text-gray-500">Gestiona la base de datos de tus clientes capturados.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            <Download className="h-4 w-4" /> Exportar CSV
          </button>
          <button className="rounded-lg bg-green-500 px-4 py-2 text-sm font-medium text-black hover:bg-green-400 shadow-sm">
            + Nuevo Contacto
          </button>
        </div>
      </div>

      {/* Barra de Filtros */}
      <div className="mb-6 flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input 
            type="text" 
            placeholder="Buscar por nombre o teléfono..." 
            className="w-full rounded-lg border border-gray-200 py-2 pl-10 pr-4 text-sm focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
          />
        </div>
        <button className="flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">
          <Filter className="h-4 w-4" /> Filtros
        </button>
      </div>

      {/* Tabla de Datos */}
      <div className="flex-1 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-semibold border-b border-gray-200">
              <tr>
                <th className="px-6 py-4">Nombre</th>
                <th className="px-6 py-4">Estado</th>
                <th className="px-6 py-4">Teléfono</th>
                <th className="px-6 py-4">Etiquetas</th>
                <th className="px-6 py-4">Última Actividad</th>
                <th className="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {contacts.map((contact) => (
                <tr key={contact.id} className="hover:bg-gray-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-xs">
                        {contact.name.charAt(0)}
                      </div>
                      <span className="font-medium text-gray-900">{contact.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium
                      ${contact.status === 'Cliente' ? 'bg-green-100 text-green-800' : 
                        contact.status === 'Nuevo' ? 'bg-blue-100 text-blue-800' : 
                        'bg-gray-100 text-gray-800'}`}>
                      {contact.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-500 font-mono">{contact.phone}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-1">
                      {contact.tags.map(tag => (
                        <span key={tag} className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-600 border border-gray-200">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-500">{contact.lastContact}</td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-gray-400 hover:text-gray-600 group-hover:opacity-100 opacity-0 transition-opacity">
                      <MoreHorizontal className="h-5 w-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}