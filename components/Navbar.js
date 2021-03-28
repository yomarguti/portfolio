import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <ul className="flex items-center justify-center w-full h-16 text-sm font-bold text-white bg-green-900 rounded-sm md:text-base md:border md:border-gray-400 md:shadow">
      <Link href="/">
        <li className="p-4 cursor-pointer hover:bg-green-800">Home</li>
      </Link>
      <Link href="/skills">
        <li className="p-4 cursor-pointer hover:bg-green-800">Skills</li>
      </Link>
      <Link href="/blog">
        <li className="p-4 cursor-pointer hover:bg-green-800">Blog</li>
      </Link>
      <Link href="/me">
        <li className="p-4 cursor-pointer hover:bg-green-800">About Me</li>
      </Link>
    </ul>
  );
};

export default Navbar;
