import Image from "next/image";
import React from "react";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoWhatsapp,
} from "react-icons/bi";

function Footer() {
  return (
    <div className="relative flex w-full flex-col items-center bg-black pb-12 pt-12">
      <div className="grid w-full max-w-1400 grid-cols-2 grid-rows-2 gap-10 pl-12 pr-12 lg:grid-cols-4 lg:grid-rows-1 xl:pl-0 xl:pr-0">
        <div className="flex flex-col">
          <h1 className="mb-4 text-white">Company</h1>
          <ul className="grid grid-rows-4 gap-2">
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              About us
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Contact us
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Location
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Products
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-4 text-white">Customer</h1>
          <ul className="grid grid-rows-4 gap-2">
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              My orders
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              My account
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Track Order
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Report
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-4 text-white">Links</h1>
          <ul className="grid grid-rows-4 gap-2">
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Terms of use
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Privacy Policy
            </li>
            <li className="text-gray-400 transition-all hover:cursor-pointer hover:text-gray-600">
              Support
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-3 lg:items-end">
          <h1 className="text-right text-xl text-white lg:text-left lg:text-2xl">
            Vinyas Furnitures
          </h1>
          <p className="text-sm text-gray-400 md:text-base lg:text-right">
            This is the address of Vinyas Furnitures in banglore and coimbatore,
            48287, India
          </p>
          <div className="flex flex-row items-start gap-4">
            <BiLogoFacebook className="cursor-pointer text-3xl text-white transition-all hover:text-gray-400" />
            <BiLogoInstagram className="cursor-pointer text-3xl text-white transition-all hover:text-gray-400" />
            <BiLogoWhatsapp className="cursor-pointer text-3xl text-white transition-all hover:text-gray-400" />
          </div>
        </div>
      </div>
      <hr className="mb-10 mt-10 w-full border-gray-700" />
      <div className="flex w-full max-w-1400 grid-cols-1 grid-rows-2 flex-col gap-4 pl-12 pr-12 text-white lg:grid lg:grid-cols-2 lg:grid-rows-1 xl:pl-0 xl:pr-0">
        <div className="flex flex-col justify-center gap-3">
          <h1 className="text-xl lg:text-2xl"> Sign up to our newsletter</h1>
          <p className="text-gray-400">
            Be the first to know about new arrivals, sales & promos by
            submitting your email!
          </p>
          <div className="text-md relative mt-3 flex w-full max-w-lg items-center rounded-full border border-gray-400 bg-transparent pb-1 pl-7 pr-1 pt-1">
            <input
              type="text"
              placeholder="example@email.com"
              className="mr-12 w-full bg-transparent text-gray-500 outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-red-600 px-8 py-2 text-white shadow-md transition-all hover:bg-red-900 hover:text-gray-400"
            >
              Submit
            </button>
          </div>
        </div>
        {/* <div className="flex lg:justify-end">
          <Image
            src="/images/sample/googl_ED.jpg"
            alt="Map"
            width={400}
            height={100}
          />
        </div> */}
      </div>

      <hr className="mb-10 mt-10 w-full border-gray-700" />
      <div className="w-full max-w-1400 pl-12 pr-12 xl:pl-0 xl:pr-0">
        <p className="text-center text-gray-400">
          Copyright © 2023 All rights reserved | Vinyas Furnitures
        </p>
      </div>
    </div>
  );
}

export default Footer;
