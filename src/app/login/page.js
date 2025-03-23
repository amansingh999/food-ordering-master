'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import PizzaLoader from '@/libs/Loader';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginInProgress, setLoginInProgress] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setLoginInProgress(true);
    setLoading(true);
    await signIn('credentials', { email, password, callbackUrl: '/' });

    setLoginInProgress(false);
    setLoading(false);
  }

  return (
    <>
      {loading && <PizzaLoader />}
      <section className='mt-8'>
        <h1 className='text-center text-primary text-4xl mb-4'>Login</h1>
        <form className='max-w-xs mx-auto' onSubmit={handleFormSubmit}>
          <input
            type='email'
            name='email'
            placeholder='Email'
            value={email}
            disabled={loginInProgress}
            onChange={(ev) => setEmail(ev.target.value)}
            className='w-full p-2 border rounded'
          />

          <div className='relative mt-3'>
            <input
              type={showPassword ? 'text' : 'password'}
              name='password'
              placeholder='Password'
              value={password}
              disabled={loginInProgress}
              onChange={(ev) => setPassword(ev.target.value)}
              className='w-full p-2 pr-10 border rounded'
            />
            <span
              className='absolute inset-y-0 right-3 flex items-center cursor-pointer text-gray-600'
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className='w-5 h-5'
              />
            </span>
          </div>

          <button
            disabled={loginInProgress}
            type='submit'
            className='w-full mt-4 bg-primary text-white p-2 rounded'
          >
            Login
          </button>

          <div className='my-4 text-center text-gray-500'>
            or login with provider
          </div>

          <button
            type='button'
            onClick={() => signIn('google', { callbackUrl: '/' })}
            className='flex gap-4 justify-center p-2 border rounded w-full'
          >
            <Image src={'/google.png'} alt={''} width={24} height={24} />
            Login with Google
          </button>
        </form>
      </section>
    </>
  );
}
