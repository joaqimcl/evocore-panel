// app/(panel)/servicios/page.tsx
'use client'
import React from 'react'
import { Check, CreditCard, Download } from 'lucide-react'

export default function ServiciosPage() {
  return (
    <div className="p-8 max-w-5xl mx-auto">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Mis Servicios</h1>
          <p className="text-gray-500">Gestiona tu plan y facturación.</p>
        </div>
        <button className="text-sm text-green-600 font-medium hover:underline flex items-center gap-1">
          <Download className="h-4 w-4" /> Descargar Factura
        </button>
      </div>

      {/* Tarjeta del Plan Actual */}
      <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="bg-gray-900 p-6 text-white flex justify-between items-center">
            <div>
                <p className="text-sm text-gray-400 uppercase tracking-wider font-bold">Plan Actual</p>
                <h2 className="text-2xl font-bold mt-1">Plan Crecimiento</h2>
            </div>
            <div className="text-right">
                <p className="text-2xl font-bold">$350.000<span className="text-sm text-gray-400 font-normal">/mes</span></p>
                <span className="inline-flex items-center rounded-full bg-green-500/20 px-3 py-0.5 text-xs font-medium text-green-400 border border-green-500/30 mt-1">
                    Activo
                </span>
            </div>
        </div>
        
        <div className="p-8">
            <h3 className="font-medium text-gray-900 mb-4">Funcionalidades Incluidas:</h3>
            <div className="grid md:grid-cols-2 gap-4">
                {['Chatbot IA Avanzado', 'Reservas Automáticas', 'Panel de Control', 'Soporte Prioritario', 'Reportes Semanales', '1 Número de WhatsApp'].map((item) => (
                    <div key={item} className="flex items-center text-sm text-gray-600">
                        <div className="mr-3 flex h-5 w-5 items-center justify-center rounded-full bg-green-100">
                            <Check className="h-3 w-3 text-green-600" />
                        </div>
                        {item}
                    </div>
                ))}
            </div>
        </div>
        
        <div className="p-6 bg-gray-50 border-t border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-3 text-sm text-gray-600">
                <CreditCard className="h-5 w-5 text-gray-400" />
                <span>Próximo pago: <strong>01 Diciembre, 2025</strong></span>
            </div>
            <button className="text-sm font-medium text-gray-900 hover:text-green-600 transition-colors">
                Cambiar método de pago
            </button>
        </div>
      </div>
    </div>
  )
}