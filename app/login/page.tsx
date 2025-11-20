'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // SIMULACIÓN TEMPORAL: Redirige directo para probar que el deploy funciona
    // Luego conectaremos la API real.
    setTimeout(() => router.push('/chat'), 1000)
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-900">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-gray-800 p-8 rounded-xl">
        <h1 className="text-2xl text-white font-bold mb-4">Panel EvoCore</h1>
        <input type="email" placeholder="Email" className="w-full p-3 mb-4 rounded bg-gray-700 text-white" />
        <input type="password" placeholder="Pass" className="w-full p-3 mb-4 rounded bg-gray-700 text-white" />
        <button disabled={loading} className="w-full bg-green-500 p-3 rounded font-bold">
          {loading ? 'Entrando...' : 'Iniciar Sesión'}
        </button>
      </form>
    </div>
  )
}