'use client';

import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const products = [
  { name: 'Product 1', description: 'Description 1', href: '#' },
  { name: 'Product 2', description: 'Description 2', href: '#' },
];

const callsToAction = [
  { name: 'Action 1', href: '#' },
  { name: 'Action 2', href: '#' },
];

const Header: React.FC = () => {
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <header className="relative bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <h1>Vinyas Furnitures</h1>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setProductDropdown(true)}
          >
            <span className="sr-only">Open main menu</span>
            <span className="h-6 w-6">&#9776;</span>
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <div>
            <button
              onMouseOver={() => setProductDropdown(true)}
              onMouseLeave={() => setProductDropdown(false)}
              className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
            >
              Product
              <BiChevronDown />
            </button>
            {productDropdown && (
              <div className="absolute left-1/2 mt-5 w-full max-w-7xl -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {products.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <img
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          src="path/to/your-icon.svg"
                          alt=""
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
          >
            Features
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
          >
            Marketplace
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
          >
            Company
          </a>
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-gray-900 transition-all hover:text-gray-500"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
