import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul className="w-full h-16 md:border md:border-gray-400 md:shadow rounded-sm flex justify-center font-bold text-white bg-green-900 fixed">
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
        <li className="p-4 cursor-pointer hover:bg-green-800">Sobre mi</li>
      </Link>
    </ul>
  );
};

{
  /* <div className="mx-auto w-full md:w-page-width  bg-blue-100">Estoy en el Medio</div> */
}
export default Navbar;
