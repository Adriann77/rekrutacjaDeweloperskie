import React from 'react';

export default function Footer() {
  return (
    <footer className='flex fixed bottom-0 justify-around items-center bg-black text-white w-full h-[120px]'>
      <div className='w-6 h-6 bg-green-500'></div>
      <div className='w-6 h-6 bg-red-500 rounded-full'></div>
      <div className='w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[20px] border-b-blue-500'></div>
    </footer>
  );
}
