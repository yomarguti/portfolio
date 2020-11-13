import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul className="w-full text-sm md:text-base flex justify-center items-center h-16 md:border md:border-gray-400 md:shadow rounded-sm font-bold text-white bg-green-900">
      <Link href="/">
        <li className="p-4 cursor-pointer hover:bg-green-800">Inicio</li>
      </Link>
      <Link href="/study">
        <li className="p-4 cursor-pointer hover:bg-green-800">Estudios</li>
      </Link>
      <Link href="/skills">
        <li className="p-4 cursor-pointer hover:bg-green-800">Habilidades</li>
      </Link>
      <Link href="/about">
        <li className="p-4 cursor-pointer hover:bg-green-800">Sobre mí</li>
      </Link>
    </ul>
  );
};

export default Navbar;
