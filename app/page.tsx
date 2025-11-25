// app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  // Redirige automáticamente al login
  redirect('/login')
}