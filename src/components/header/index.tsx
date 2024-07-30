"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { IoIosArrowDown } from "react-icons/io";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => (
  <div className="relative w-10 h-10">
    <motion.span
      initial={{ rotate: 0, y: 0 }}
      animate={isOpen ? { rotate: 45, y: 25 } : { rotate: 0, y: 5 }}
      transition={{ duration: 0.3 }}
      className="block absolute w-full h-0.5 bg-[--app-gray-100]"
    />
    <motion.span
      initial={{ opacity: 1 }}
      animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="block absolute w-full h-0.5 bg-[--app-gray-100] top-1/2 transform -translate-y-1/2"
    />
    <motion.span
      initial={{ rotate: 0, y: 0 }}
      animate={isOpen ? { rotate: -45, y: -13 } : { rotate: 0, y: -5 }}
      transition={{ duration: 0.3 }}
      className="block absolute w-full h-0.5 bg-[--app-gray-100] bottom-0"
    />
  </div>
);

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="center-col w-full absolute !justify-between h-[100px] top-[10px] md:top-0 left-0 px-[40px]">
      <img
        src="/assets/images/logo.svg"
        alt="logo"
        className="h-[100%] md:hidden mt-5"
      />
      <nav className="center md:hidden mt-3 h-full text-[--app-gray-800] hover:[&>a]:border-b-[--app-gray-500]">
        <a
          href="/"
          className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
        >
          Home
        </a>
        <a
          href="/about"
          className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
        >
          Campanha
        </a>
        <a
          href="/contact"
          className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
        >
          Conteudo
        </a>
        <a
          href="/contact"
          className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
        >
          Influenciadores
        </a>
        <div className="relative inline-block">
          <button
            onClick={toggleDropdown}
            className="mx-2 font-[300] text-[16px] center transition-all border-solid border-[1px] border-transparent hover:border-b-[--app-gray-500]"
          >
            Outros
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.4 }}
              className="ml-2 inline-block"
            >
              <IoIosArrowDown />
            </motion.div>
          </button>
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute right-0 mt-2 w-48 bg-white rounded-[8px] shadow-sm rounded-t-none border-t-[1px] border-t-[#e0e0e0] border-solid"
              >
                <ul role="list">
                  <li className="block py-2 px-4 text-sm text-gray-700">
                    <a href="#">Clientes</a>
                  </li>
                  <li className="block py-2 px-4 text-sm text-gray-700">
                    <a href="#">Cases</a>
                  </li>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      <nav className="md:flex flex-col z-[9999999999] h-screen hidden w-full fixed !justify-center top-[0px] left-0">
        <button
          className="block text-[#ffffff] top-[25px] left-[25px] absolute z-22"
          onClick={toggleMenu}
        >
          <HamburgerIcon isOpen={isMenuOpen} />
        </button>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="center-col  bg-[--app-gray-900] w-screen h-screen"
            >
              <ul className="w-full center-col space-y-4 [&>li>a]:text-[30px]">
                <li>
                  <a
                    href="/"
                    className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
                  >
                    Campanha
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
                  >
                    Conteudo
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
                  >
                    Influenciadores
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="mx-2 font-[300] transition-all border-solid border-[1px] border-transparent"
                  >
                    Clientes
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
