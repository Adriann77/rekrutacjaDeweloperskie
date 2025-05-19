import React from 'react';
import Form from '../components/Form';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function page() {
  return (
    <div className='flex h-screen items-center justify-center'>
      <Header />
      <Form />
      <Footer />
    </div>
  );
}
