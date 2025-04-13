// components/Sidebar.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: '/', label: 'Início' },
    { href: '/investimentos', label: 'Investimentos' },
    { href: '/ranking', label: 'Ranking' },
    { href: '/perfil', label: 'Perfil' },
  ];

  return (
    <>
      {/* Botão hamburguer visível apenas no mobile */}
      <button
        className="md:hidden p-4"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Abrir menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-900 text-white w-64 transform transition-transform z-40
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static md:block`}
      >
        <nav className="p-4 space-y-4">
          <h2 className="text-xl font-semibold mb-4">Simulador</h2>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block hover:bg-gray-700 px-3 py-2 rounded-md transition"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </aside>

      {/* Overlay para fechar o menu no mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
