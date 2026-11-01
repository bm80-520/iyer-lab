import type { Metadata } from 'next';
import { LoginForm } from '@/components/admin/login-form';

export const metadata: Metadata = { title: 'Log in', robots: { index: false, follow: false } };

export default function LoginPage() {
  return (
    <div className="container page-content login-page">
      <LoginForm />
    </div>
  );
}
