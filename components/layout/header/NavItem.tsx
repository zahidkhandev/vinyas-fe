'use client';

import React, { ReactNode, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

function NavItem({ text }: any) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AnimatePresence>
      <div
        className="flex cursor-pointer flex-col"
        style={{ position: 'relative' }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex flex-col">
          <h1 className="text-md font-medium text-gray-700">{text}</h1>
          <motion.span
            className="border-2 border-mainGold"
            initial={{ width: '0%', opacity: '0%' }}
            animate={{
              width: isHovered ? '100%' : '0%',
              opacity: isHovered ? '100%' : '0%',
            }}
            style={{ position: 'absolute', bottom: '0', left: 0 }}
          />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default NavItem;
