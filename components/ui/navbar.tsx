"use client";
import * as React from "react";
import Link from "next/link";
import Image from 'next/image';

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed left-0 top-0 z-40 w-full">
      <nav className="h-15 md:mt-5">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between shadow-md backdrop-blur-md bg-zinc-900/75 md:rounded-full px-7 mx-auto p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className=" border border-red-600 rounded-full"
              src="/images/rhea.png"
              width="32"
              height="32"
              alt="Icon"
              quality={100}
            />
            <span className="self-center hover:text-red-600 transition duration-250 text-2xl font-semibold">
              Rhea Milberg
            </span>
          </Link>
          <div className="md:hidden hover:stroke-red-600 stroke-red-400 transition duration-250">
            <button onClick={handleOpen} className="flex">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 17 14">
                <path
                  className=""
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block w-auto">
            <ul className="font-medium flex space-x-8">
              <li>
                <Link href="/about" className="hover:text-red-600 transition duration-250">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume.pdf" className="hover:text-red-600 transition duration-250">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-red-600 transition duration-250">
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rheamilberg@gmail.com"
                  className="bg-red-800 hover:bg-red-600 p-1.5 rounded-md transition duration-250"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:hidden transition-all duration-500">
        {open ? (
          <div className="md:block w-full bg-zinc-900/75 rounded-b-lg flex h-auto border-zinc-800 backdrop-blur-md justify-center p-2">
            <ul className="font-medium text-l flex flex-row flex-wrap justify-center align-center space-x-4">
              <li>
                <Link href="/about" className="hover:text-red-600 transition duration-250">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume.pdf" className="hover:text-red-600 transition duration-250">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-red-600 transition duration-250">
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rheamilberg@gmail.com"
                  className="hover:text-red-600 transition duration-250"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
}
