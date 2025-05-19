'use client';
import React, { useEffect, useState } from 'react';

export default function Form() {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    fetch('https://picsum.photos/600/400')
      .then((res) => setBgImage(res.url))
      .catch(console.error);
  }, []);

  const validateLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      loginSucces();
      return;
    } else {
      alert('Niepoprawny login lub hasło');
      setUsername('');
      setPassword('');
    }
  };

  const loginSucces = () => {
    alert('Zalogowano pomyślnie');
    setUsername('');
    setPassword('');
  };

  return (
    <form
      className={` relative flex flex-col p-6 rounded-xl  items-center justify-center bg-cover bg-no-repeat bg-center`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='absolute inset-0 bg-black opacity-50 rounded-xl pointer-events-none'></div>
      <div className='relative rounded-lg flex flex-col gap-4 p-6 w-full max-w-sm z-10'>
        <div className={formDivStyle}>
          <label htmlFor='username'>Podaj login</label>
          <input
            className={inputStyle}
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className={formDivStyle}>
          <label htmlFor='password'>Podaj haslo</label>
          <input
            className={inputStyle}
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className='p-2 bg-black cursor-pointer text-white rounded-lg hover:bg-gray-800'
          type='submit'
          onClick={validateLogin}
        >
          Zaloguj się
        </button>
      </div>
    </form>
  );
}

const formDivStyle = 'flex flex-col gap-2 p-2 text-white drop-shadow-md';
const inputStyle =
  'border-2 border-white rounded-md p-2 bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white shadow-md';
