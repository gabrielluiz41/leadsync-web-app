// app/register/page.tsx
import AuthForm from '@/components/AuthForm'

export default function RegisterPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Registrar</h1>
      <AuthForm isLogin={false} />
    </main>
  )
}
