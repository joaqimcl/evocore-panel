// app/page.tsx
import { redirect } from 'next/navigation'

export default function Home() {
  // En cuanto alguien entre a la raíz, lo mandamos al login
  redirect('/login')
}