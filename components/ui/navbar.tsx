

export function Navbar(){
    return(
        <div>
            <nav className=" dark:bg-zinc-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/rhea.png" className="h-8 rounded-full" alt="Icon"/>
                        <span className="self-center hover:text-red-600 text-2xl font-semibold">Rhea Milberg</span>
                    </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-auto space-x-8">
                        <li>
                            <a href="/about" className="hover:text-red-600">
                               About Me 
                            </a>
                        </li>
                        <li>
                            <a href="/resume" className="hover:text-red-600">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="/education" className="hover:text-red-600">
                                Education
                            </a>
                        </li>
                        <li>
                            <a href="/contact" className="bg-red-800 hover:bg-red-600 p-1.5 rounded-md">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                </div>  
            </nav>
        </div>
    )
}