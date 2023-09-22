import React from 'react';
import NavItem from './NavItem';

function Header() {
  return (
    <header className="flex flex-col items-center bg-white p-5 pt-8 text-black">
      <div className="flex w-full max-w-7xl flex-row justify-between">
        <h1 className="text-lg">Vinyas furnitures</h1>
        <nav className="flex flex-row gap-12">
          <NavItem text="Home" />
          <NavItem text="Products" />
          <NavItem text="About Us" />
          <NavItem text="Contact Us" />
        </nav>
      </div>
    </header>
  );
}

export default Header;
