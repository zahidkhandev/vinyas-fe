'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { LuSofa } from 'react-icons/lu';

function NavBar() {
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <nav className="mx-auto mt-2 flex max-w-7xl items-center justify-between font-thin tracking-wider">
      <div className="hidden pt-5 lg:flex lg:gap-x-12 ">
        <Link href={'/'}>
          <button
            onMouseOver={() => setProductDropdown(true)}
            onMouseLeave={() => setProductDropdown(false)}
            className="flex items-center gap-x-1 text-sm font-medium leading-6 tracking-wide text-gray-900 transition-all hover:text-gray-500"
          >
            PRODUCTS
            <BiChevronDown />
          </button>
          <AnimatePresence>
            {productDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 20, x: '-50%' }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
                className="absolute left-1/2 flex w-full max-w-7xl -translate-x-1/2 justify-center justify-self-center  pt-6"
                onMouseOver={() => setProductDropdown(true)}
                onMouseLeave={() => setProductDropdown(false)}
              >
                <div className="w-full rounded-sm bg-white p-4 pt-6 shadow-lg ring-1 ring-gray-900/5">
                  <div className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50">
                    <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <LuSofa style={{ fontSize: 24 }} />
                    </div>
                    <div className="flex-auto">
                      <a className="block font-semibold text-gray-900">
                        Sofa
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">EST DESC</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
