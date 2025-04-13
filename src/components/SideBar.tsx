'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Sidebar() {
  // Estado para controlar a visibilidade da sidebar
  const [isOpen, setIsOpen] = useState(true);

//   // Função para alternar a visibilidade da sidebar
//   const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`inset-0 z-50 bg-gray-800 transition-all duration-300 ease-in-out ${
        isOpen ? 'w-64' : 'w-0'
      }`}
    >

      {/* Conteúdo da Sidebar */}
      <nav className={`text-white p-4 transition-all duration-300 ease-in-out`}>
        <ul className="space-y-4">
          <li>
            <Link href="/" className="hover:text-gray-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-gray-400">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-400">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-gray-400">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
