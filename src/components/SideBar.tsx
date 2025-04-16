'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {


  // Estado para controlar a visibilidade da sidebar
  const [isOpen, setIsOpen] = useState(true);

  // Função para alternar a visibilidade da sidebar

  return (

    <>

      {/* Botão toggle */}
      {/* funçao de fechar e abrir a sidebar */}



      <div
        className={`inset-0 z-50 bg-gray-800 transition-all duration-300 ease-in-out ${isOpen ? 'w-64 ' : 'w-0 opacity-0'
          }`}
      >

        {/* Conteúdo da Sidebar */}
        <nav className={`text-white p-4 transition-all duration-300 ease-in-out  flex  flex-col  font-sans  "
        }`} >
          <ul className="flex flex-col gap-4">
            <li className='text-black bg-white rounded-md cursor-pointer '>
              <Link href="/" className=" hover:text-gray-400">
                Home
              </Link>


            </li>

            <li className='text-black bg-white rounded-md cursor-pointer'>
              <Link href="/about" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>

            <li className='text-black bg-white rounded-md cursor-pointer'>
              <Link href="/services" className="hover:text-gray-400">
                Services
              </Link>
            </li>

            <li className='text-black bg-white rounded-md'>
              <Link href="/contact" className="hover:text-gray-400">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <button onClick={() => setIsOpen(!isOpen)} className='relative '>
        {isOpen ? <X /> : <Menu />}
      </button>
    </>
  );
}
