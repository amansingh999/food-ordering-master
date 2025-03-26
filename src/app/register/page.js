'use client';
import { signIn } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function RegisterPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      setUserCreated(true);
    } else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className='mt-8'>
      <h1 className='text-center text-primary text-4xl mb-4'>Register</h1>
      {userCreated && (
        <div className='my-4 text-center'>
          User created.
          <br />
          Now you can{' '}
          <Link className='underline' href={'/login'}>
            Login &raquo;
          </Link>
        </div>
      )}
      {error && (
        <div className='my-4 text-center'>
          An error has occurred.
          <br />
          Please try again later
        </div>
      )}
      <form className='block max-w-xs mx-auto' onSubmit={handleFormSubmit}>
        <input
          type='email'
          placeholder='email'
          value={email}
          disabled={creatingUser}
          onChange={(ev) => setEmail(ev.target.value)}
        />
        <div className='relative mt-3'>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder='password'
            value={password}
            disabled={creatingUser}
            onChange={(ev) => setPassword(ev.target.value)}
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
        <button type='submit' disabled={creatingUser}>
          Register
        </button>
        <div className='my-4 text-center text-gray-500'>
          or login with provider
        </div>
        <button
          onClick={() => signIn('google', { callbackUrl: '/' })}
          className='flex gap-4 justify-center'
        >
          <Image src={'/google.png'} alt={''} width={24} height={24} />
          Login with google
        </button>
        <div className='text-center my-4 text-gray-500 border-t pt-4'>
          Existing account?{' '}
          <Link className='underline' href={'/login'}>
            Login here &raquo;
          </Link>
        </div>
      </form>
    </section>
  );
}
