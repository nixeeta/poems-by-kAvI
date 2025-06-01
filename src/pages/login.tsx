import { useState } from 'react';
import { useRouter } from 'next/router';
import { auth } from '../utils/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

export default function LoginPage() {
  const router = useRouter();
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      if (isSignup) {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main className="main-container">
      <h1 className="heading">{isSignup ? 'Sign Up' : 'Log In'}</h1>
      <form onSubmit={handleAuth} className="section-box space-y-4 mt-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="button-primary w-full">{isSignup ? 'Create Account' : 'Log In'}</button>
        {error && <p className="text-red-500">{error}</p>}
        <p className="text-sm text-center cursor-pointer" onClick={() => setIsSignup(!isSignup)}>
          {isSignup ? 'Already have an account? Log in' : 'No account? Sign up'}
        </p>
      </form>
    </main>
  );
}
