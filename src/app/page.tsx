import Link from 'next/link';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  return (
    <main className='text-red-500'>
      <Header />

      <div className='flex items-center justify-center h-screen'>
        <Link
          className='text-black text-2xl'
          href={'login'}
        >
          Zaloguj się
        </Link>
      </div>

      <Footer />
    </main>
  );
}
