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
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between shadow-md dark:bg-zinc-900 opacity-[.99] md:rounded-full px-7 mx-auto p-4">
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
            />
            <span className="self-center hover:text-red-600 text-2xl font-semibold">
              Rhea Milberg
            </span>
          </Link>
          <div className="md:hidden">
            <button onClick={handleOpen} className="flex">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 17 14">
                <path
                  stroke="rgb(220 38 38)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block w-auto">
            <ul className="font-medium flex space-x-8">
              <li>
                <Link href="/about" className="hover:text-red-600">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume.pdf" className="hover:text-red-600">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/showcase" className="hover:text-red-600">
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rheamilberg@gmail.com"
                  className="bg-red-800 hover:bg-red-600 p-1.5 rounded-md"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        {open ? (
          <div className="md:block w-full bg-zinc-900 rounded-b-lg flex border-t h-auto border-zinc-800 justify-center p-2">
            <ul className="font-medium text-l flex flex-row flex-wrap justify-center align-center space-x-4">
              <li>
                <Link href="/about" className="hover:text-red-600">
                  About Me
                </Link>
              </li>
              <li>
                <Link href="/resume.pdf" className="hover:text-red-600">
                  Resume
                </Link>
              </li>
              <li>
                <Link href="/Showcase" className="hover:text-red-600">
                  Showcase
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:rheamilberg@gmail.com"
                  className="hover:text-red-600"
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
