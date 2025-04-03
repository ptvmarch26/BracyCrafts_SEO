"use client";

import { useState } from "react";
import { FaBars, FaSearch } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/images/logo.svg";
import { MdOutlineShoppingBag } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { IoClose } from "react-icons/io5";

const options = [
  { name: "Mọi thứ", url: "/product" },
  { name: "BTS thời đại", url: "/" },
  { name: "Blog hay", url: "/blog" },
  { name: "Ưu đãi", url: "/" },
  { name: "Về Bracycrafts", url: "/about-us" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#FEFBF4] border-b-[#BD3A3A] border h-[100px] flex items-center px-2">
      <div className="container mx-auto">
        <div className="flex items-center gap-5 justify-between">
          {/* Mobile Menu */}
          <div className="flex lg:hidden items-center space-x-4 text-[#BD3A3A] text-2xl">
            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
              className="group relative cursor-pointer"
            >
              <FaBars />
            </button>
            <div className="group relative cursor-pointer">
              <Link href="/" aria-label="Search">
                <FaSearch />
              </Link>
            </div>
          </div>

          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image
                src={logo}
                alt="BracyCrafts Logo"
                width={120}
                height={80}
              />
            </Link>
          </div>

          {/* Search & Icons */}
          <div className="flex space-x-5">
            <div className="hidden lg:flex items-center border border-[#BD3A3A] px-3 py-1 h-[40px] w-[500px] rounded-md focus-within:border-[#BD3A3A] focus-within:border-[2px]">
              <input
                type="text"
                placeholder="Khách iu cần gì?"
                className="flex-grow bg-transparent outline-none placeholder-[#BD3A3A99] text-[#BD3A3A]"
              />
              <FaSearch className="text-[#BD3A3A]" />
            </div>

            <div className="flex items-center space-x-2 text-[#BD3A3A] text-3xl">
              <Link href="/" aria-label="User" className="group relative">
                <LuUser />
              </Link>
              <Link href="/" aria-label="Cart" className="group relative">
                <MdOutlineShoppingBag />
              </Link>
            </div>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex justify-center">
          <ul className="flex gap-20 text-[#BD3A3A] w-[800px]">
            {options.map((option, index) => (
              <li
                key={index}
                className="relative uppercase font-extrabold text-base"
              >
                <Link
                  href={option.url}
                  className="hover:text-[#BD3A3A] relative"
                >
                  {option.name}
                  <span className="absolute left-0 -bottom-1 w-0 h-[3px] bg-[#BD3A3A] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-start" onClick={() => setIsOpen(false)}>
          <div className="bg-white w-[300px] h-full p-5 shadow-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setIsOpen(false)}
              className="text-3xl text-[#BD3A3A] absolute top-5 right-5 cursor-pointer"
              aria-label="Close Menu"
            >
              <IoClose />
            </button>

            <nav className="mt-10">
              <ul className="space-y-4 text-[#BD3A3A] font-bold">
                {options.map((option, index) => (
                  <li key={index}>
                    <Link
                      href={option.url}
                      className="block p-2 hover:bg-[#BD3A3A]/10 rounded"
                      onClick={() => setIsOpen(false)}
                    >
                      {option.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
