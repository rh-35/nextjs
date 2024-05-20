"use client";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./ui/mode-toggle";

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="fixed left-0 top-0 text-white z-30 w-full">
      <nav className="h-15">
        <div className="md:h-4" />
        <div className="md:mx-auto xl:mx-48 flex flex-wrap items-center justify-between backdrop-blur-md bg-red-500 dark:bg-zinc-900/75 md:rounded-full px-7 p-4">
          <Link
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              className=" border border-red-600 rounded-full hover:animate-spin h-8 w-8"
              src="/images/icon.png"
              width="250"
              height="250"
              alt="Icon"
              quality={100}
            />
            <span className="hover:text-red-600 transition duration-250 text-2xl font-semibold">
              Brooke Milberg
            </span>
          </Link>
          <div className="md:hidden hover:stroke-red-600 stroke-red-400 transition duration-250">
            <button onClick={handleOpen} className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8  hover:stroke-red-600 stroke-red-400 transition duration-250"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden md:block w-auto">
            <ul className="font-medium items-center flex space-x-8">
              <li>
                <Link
                  href="/resume"
                  className="hover:text-red-600 transition duration-250"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-red-600 transition duration-250"
                >
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
              <li>
                <ModeToggle/>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="md:hidden">
        {open ? (
          <div className="md:block w-full rounded-b-xl flex h-auto border-zinc-800 backdrop-blur-md bg-zinc-900/75 justify-center p-2">
            <ul className="font-medium text-l flex flex-row flex-wrap justify-center align-center space-x-4">
              <li>
                <Link
                  href="/resume"
                  className="hover:text-red-600 transition duration-250"
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  href="/showcase"
                  className="hover:text-red-600 transition duration-250"
                >
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
