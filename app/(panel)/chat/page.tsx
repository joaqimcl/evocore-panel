// app/(panel)/chat/page.tsx
'use client'

import React, { useState } from 'react'
import { 
  Search, Filter, MoreHorizontal, Phone, Check, 
  Paperclip, Send, User, Bot, QrCode, ExternalLink,
  LayoutGrid, ListFilter, Settings, Smartphone
} from 'lucide-react'

// --- DATOS DE EJEMPLO (MOCK DATA) ---
// Esto simula lo que traeremos de la base de datos después
const conversations = [
  {
    id: 1,
    name: 'Ignacio Muñoz Agurto',
    lastMessage: '¡Perfecto! 🤩 Te muestro nuestro menú. ¿Qué tipo de producto te interesa?',
    time: '23:31',
    date: 'Hoy',
    status: 'Atendido por IA', // Etiqueta verde
    statusColor: 'bg-green-100 text-green-700',
    platform: 'whatsapp',
    unread: 2
  },
  {
    id: 2,
    name: '+56 9 8765 4321',
    lastMessage: 'No tengo la dirección exacta del local en este momento 📍',
    time: '23:27',
    date: 'Hoy',
    status: 'Pendiente', // Etiqueta amarilla
    statusColor: 'bg-yellow-100 text-yellow-700',
    platform: 'whatsapp',
    unread: 0
  },
  {
    id: 3,
    name: 'Maria Gonzalez',
    lastMessage: 'Muchas gracias por la información.',
    time: '10:15',
    date: 'Ayer',
    status: 'Cerrado', // Etiqueta gris
    statusColor: 'bg-gray-100 text-gray-600',
    platform: 'whatsapp',
    unread: 0
  }
]

const activeChatMessages = [
  { id: 1, sender: 'user', text: 'Hola de nuevo! 👋😋 ¿En qué puedo ayudarte?', time: '19:37' },
  { id: 2, sender: 'bot', text: '¡Hola! Soy el asistente virtual. ¿Quieres hacer un pedido o tienes alguna duda?', time: '19:37' },
  { id: 3, sender: 'user', text: 'Disculpa Ignacio, veo que los productos que tengo disponibles son...', time: '23:40' },
]
// ------------------------------------

export default function ChatPage() {
  const [selectedChat, setSelectedChat] = useState(1)

  return (
    <div className="flex h-[calc(100vh-theme(spacing.0))] bg-white overflow-hidden"> 
      
      {/* === COLUMNA 1: CONTROL Y QR (Ancho fijo 320px) === */}
      <div className="w-80 flex flex-col border-r border-gray-200 bg-white shrink-0">
        
        {/* Selector de Embudo (Dropdown simulado) */}
        <div className="p-4 border-b border-gray-100">
          <button className="flex w-full items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <Smartphone className="h-4 w-4" />
              </div>
              <span className="font-semibold">Evocore</span>
            </div>
            <svg className="h-4 w-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </button>
        </div>

        {/* Caja del QR (Estilo Vambe) */}
        <div className="flex-1 p-4 overflow-y-auto">
          <div className="rounded-2xl border border-gray-200 p-5 shadow-sm bg-white">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-blue-600">
                <QrCode className="h-5 w-5" />
                <span className="font-semibold text-sm">Prueba tu embudo</span>
              </div>
            </div>

            <div className="flex bg-gray-100 p-1 rounded-lg mb-6">
              <button className="flex-1 rounded-md bg-white py-1.5 text-xs font-bold text-gray-800 shadow-sm">
                Probar con QR
              </button>
              <button className="flex-1 rounded-md text-xs font-medium text-gray-500 hover:text-gray-700">
                Probar en chat
              </button>
            </div>

            <p className="mb-4 text-sm text-gray-600 leading-relaxed">
              Habla con tus asistentes IA 🤖. Escanea el siguiente código QR.
            </p>

            {/* QR Placeholder */}
            <div className="aspect-square w-full bg-gray-50 rounded-xl flex items-center justify-center mb-4 border border-dashed border-gray-300">
              <QrCode className="h-32 w-32 text-gray-800 opacity-20" />
            </div>

            <div className="flex justify-center gap-3 text-xs text-blue-600 font-medium cursor-pointer hover:underline">
              Copiar Enlace
            </div>
          </div>
        </div>
      </div>

      {/* === COLUMNA 2: LISTA DE CONVERSACIONES (Ancho fijo 380px) === */}
      <div className="w-96 flex flex-col border-r border-gray-200 bg-gray-50/50 shrink-0">
        
        {/* Buscador y Filtros */}
        <div className="p-4 border-b border-gray-200 bg-white">
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar contacto" 
              className="w-full rounded-lg border border-gray-200 py-2.5 pl-10 pr-4 text-sm focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none transition-all"
            />
          </div>
          <div className="flex items-center justify-between text-xs text-gray-500">
            <div className="flex gap-2">
              <button className="font-semibold text-gray-900 bg-gray-200 px-3 py-1 rounded-full">Todos</button>
              <button className="hover:text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors">Abiertos</button>
              <button className="hover:text-gray-900 hover:bg-gray-100 px-3 py-1 rounded-full transition-colors">Cerrados</button>
            </div>
            <ListFilter className="h-4 w-4 cursor-pointer hover:text-gray-800" />
          </div>
        </div>

        {/* Lista de Chats */}
        <div className="flex-1 overflow-y-auto">
          {conversations.map((chat) => (
            <div 
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`cursor-pointer border-b border-gray-100 p-4 transition-all hover:bg-blue-50
                ${selectedChat === chat.id ? 'bg-blue-50 border-l-4 border-l-blue-500' : 'bg-white border-l-4 border-l-transparent'}`}
            >
              <div className="flex justify-between items-start mb-1.5">
                <span className="font-bold text-sm text-gray-900">{chat.name}</span>
                <span className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold ${chat.statusColor}`}>
                  {chat.status}
                </span>
              </div>
              
              <p className="text-xs text-gray-500 line-clamp-2 mb-2 leading-relaxed">
                {chat.lastMessage}
              </p>

              <div className="flex items-center justify-between text-[10px] text-gray-400">
                <div className="flex items-center gap-1">
                   {/* Icono pequeño de plataforma */}
                   {chat.platform === 'whatsapp' && <div className="w-3 h-3 rounded-full bg-green-500"></div>}
                   <span>WhatsApp</span>
                </div>
                <span>{chat.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* === COLUMNA 3: CHAT ACTIVO (Flexible) === */}
      <div className="flex flex-1 flex-col bg-white min-w-0">
        
        {/* Header del Chat */}
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-6 bg-white shadow-sm z-10">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              IM
            </div>
            <div>
              <h2 className="text-sm font-bold text-gray-900">Ignacio Muñoz Agurto</h2>
              <div className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-green-500"></span>
                <p className="text-xs text-gray-500">Activo ahora</p>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
             <button className="text-xs font-medium text-gray-600 bg-gray-100 px-3 py-1.5 rounded-md hover:bg-gray-200">
                Ver Info de Contacto
             </button>
             <Settings className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Área de Mensajes (Fondo crema/beige estilo Vambe) */}
        <div className="flex-1 overflow-y-auto bg-[#FFFBF7] p-6"> 
          <div className="space-y-6">
            {/* Aviso de sistema */}
            <div className="flex justify-center">
                <span className="text-[10px] bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Hoy, 23:30</span>
            </div>

            {activeChatMessages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex max-w-[70%] gap-3 ${msg.sender === 'user' ? 'flex-row' : 'flex-row-reverse'}`}>
                  
                  {/* Avatar */}
                  <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-sm 
                    ${msg.sender === 'user' ? 'bg-white border border-gray-200 text-gray-600' : 'bg-blue-600 text-white'}`}>
                    {msg.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>

                  {/* Burbuja de Mensaje */}
                  <div className={`rounded-2xl p-4 shadow-sm text-sm relative
                    ${msg.sender === 'user' 
                      ? 'bg-white text-gray-800 rounded-tl-none border border-gray-100' 
                      : 'bg-blue-600 text-white rounded-tr-none'}`}>
                    <p className="whitespace-pre-wrap leading-relaxed">{msg.text}</p>
                    <span className={`text-[10px] block mt-1 text-right opacity-70`}>
                      {msg.time}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Input para Escribir */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-4 py-2 shadow-sm focus-within:ring-2 focus-within:ring-blue-500 focus-within:border-transparent transition-all">
            <Paperclip className="h-5 w-5 cursor-pointer text-gray-400 hover:text-gray-600" />
            <input 
              type="text" 
              placeholder="Escribe un mensaje o nota interna..." 
              className="flex-1 bg-transparent text-sm focus:outline-none text-gray-900 h-10"
            />
            <button className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 shadow-md transition-transform active:scale-95">
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="text-center text-[10px] text-gray-400 mt-2">
            Presiona Enter para enviar
          </p>
        </div>

      </div>
    </div>
  )
}