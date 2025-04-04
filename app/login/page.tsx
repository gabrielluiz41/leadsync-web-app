// app/login/page.tsx
import AuthForm from '@/components/AuthForm'

export default function LoginPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <AuthForm isLogin />
    </main>
  )
}
