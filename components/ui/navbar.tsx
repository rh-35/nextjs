

export function Navbar(){
    return(
        <div>
            <nav className=" dark:bg-zinc-800">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/images/rhea.png" className="h-8 rounded-full" alt="Icon"/>
                        <span className="self-center text-2xl font-semibold">Rhea Milberg</span>
                    </a>
                <div className="hidden w-full md:block md:w-auto">
                    <ul className="font-medium flex flex-auto space-x-8">
                        <li>
                            <a href="/about" className="hover:text-rose-800">
                               About Me 
                            </a>
                        </li>
                        <li>
                            <a href="/resume" className="hover:text-rose-800">
                                Resume
                            </a>
                        </li>
                    </ul>
                </div>
                </div>  
            </nav>
        </div>
    )
}