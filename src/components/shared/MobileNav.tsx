"use client"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import {SignedIn,UserButton} from "@clerk/nextjs"
import { navLinks } from '@/constants'
import {usePathname} from "next/navigation"

const MobileNav = () => {
  const pathname = usePathname();  
  return (
      <header className="header">
        <Link href="/" className="flex items-center gap-2 md:py-2">
            <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={38} height={38}
            />    
        </Link>

        <nav className="flex gap-2">
            <SignedIn>
                <UserButton afterSignOutUrl="/" />
                  <Sheet>
                      <SheetTrigger>
                        <div className="flex">
                            <Image
                                src="/assets/images/menu.png"
                                alt="menu"
                                height={32}
                                width={32}
                            />
                        </div>
                        

                      </SheetTrigger>
                      <SheetContent className="sheet-content sm:w-64">
                        <>
                            <div className="flex gap-2">
                                <Image
                                    src="/assets/images/menu.png"
                                    alt="menu"
                                    height={32}
                                    width={32}
                                />
                                <h3>COOL IMAGES</h3>
                            </div>
                            <ul className="header-nav_elements">
                                {navLinks.map((link)=>{
                                const isActive = link.route === pathname
                                return (
                                <li key={link.route} className={`sidebar-nav_element group ${
                                    isActive && 'gradient-text text-white'} p-18 flex whitespace-nowrap text-dark-700`}> 
                                <Link className="sidebar-link cursor-pointer" href={link.route}>
                                   {link.label}
                                </Link>
                                </li>
                                )
                                })}
                            </ul>
                        </>
                      </SheetContent>
                  </Sheet>
            </SignedIn>
        </nav>

      </header>
  )
}

export default MobileNav