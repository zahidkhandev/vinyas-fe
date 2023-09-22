import Link from 'next/link';
import React from 'react';
import { BiMenu, BiUser } from 'react-icons/bi';

function SearchLogin() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-12 pt-5">
      {/* Logo */}
      <div className="flex items-center">
        <Link href="#">
          <h1 className="text-lg font-medium leading-6 text-gray-900 transition-all hover:text-gray-500">
            Vinyas Furnitures
          </h1>
        </Link>
      </div>

      <div className="hidden justify-center md:flex md:flex-grow">
        <input
          type="text"
          placeholder="Search..."
          className="f 0 w-full rounded-md border-gray-300 bg-gray-100 px-4 py-2 text-sm focus:outline-none"
        />
      </div>

      <div className="hidden lg:flex lg:gap-x-12 ">
        <Link
          href="#"
          className="text-md font-medium leading-6 text-gray-900 transition-all hover:text-gray-500"
        >
          About us
        </Link>
        <Link
          href="#"
          className="text-md font-medium leading-6 text-gray-900 transition-all hover:text-gray-500"
        >
          Locate us
        </Link>
        <Link
          href="#"
          className="text-md font-medium leading-6 text-gray-900 transition-all hover:text-gray-500"
        >
          Contact us
        </Link>
      </div>

      <div className="flex items-center gap-x-4 md:gap-x-12">
        <Link
          href="#"
          className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
        >
          <BiUser style={{ fontSize: '24px' }} />
        </Link>

        <Link
          href="#"
          className="block text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500 md:hidden"
        >
          <BiMenu style={{ fontSize: '24px' }} />
        </Link>
      </div>
    </div>
  );
}

export default SearchLogin;
