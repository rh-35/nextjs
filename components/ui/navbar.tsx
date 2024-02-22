"use client";
import * as React from 'react';
import Link from 'next/link';

export function Navbar(){

        const [open, setOpen] = React.useState(false);
      
        const handleOpen = () => {
          setOpen(!open);
        };

    return(
        <div>
            <nav className=" dark:bg-zinc-900 h-15">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/rhea.png" className="h-8 border border-red-600 rounded-full" alt="Icon"/>
                        <span className="self-center hover:text-red-600 text-2xl font-semibold">Rhea Milberg</span>
                    </Link>
                    <div className="md:hidden">
                        <button onClick={handleOpen} className="flex">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 17 14">
                               <path stroke="rgb(220 38 38)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>
                    <div className="hidden md:block flex w-auto">
                        <ul className="font-medium flex space-x-8">
                            <li>
                                <Link href="/about" className="hover:text-red-600">
                                About Me 
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume" className="hover:text-red-600">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="hover:text-red-600">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="bg-red-800 hover:bg-red-600 p-1.5 rounded-md">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>  
            </nav>
            <div className="md:hidden">
                {open ? (
                    <div className="md:block w-full bg-zinc-900 flex border-y justify-center w-auto p-2">
                        <ul className="font-medium text-xl flex flex-col underline underline-offset-4">
                            <li>
                                <Link href="/about" className="hover:text-red-600">
                                    About Me 
                                </Link>
                            </li>
                            <li>
                                <Link href="/resume" className="hover:text-red-600">
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link href="/education" className="hover:text-red-600">
                                    Education
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="hover:text-red-600">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                ) : null}
            </div>
        </div>
    )
}