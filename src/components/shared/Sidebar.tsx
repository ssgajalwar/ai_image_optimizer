"use client"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { navLinks } from '@/constants'
import { Button } from '../ui/button'
import { UserButton } from '@clerk/nextjs'


const Sidebar = () => {
  const pathname = usePathname();  
  return (
    <aside className="sidebar">
        <div className="flex size-full flex-col gap-4">
            <Link href="/" className="sidebar-logo">
                <Image src="/assets/images/logo.svg" alt="logo" width={38} height={38} /><h3>COOL IMAGES</h3>
            </Link>

            <nav className='sidebar-nav'>
                <SignedIn>
                    <ul className="sidebar-nav_elements">
                       {navLinks.map((link)=>{
                            const isActive = link.route === pathname
                            return (
                            <li key={link.route} className={`sidebar-nav_element group ${
                                isActive ? 'bg-purple-gradient text-white':'text-gray-700'
                            }`}> 
                                <Link className="sidebar-link" href={link.route}>
                                   {link.label}
                                </Link>
                            </li>
                            )
                       })}

                       <li className='mx-3'>
                            <UserButton afterSignOutUrl='/' />
                       </li>
                    </ul>

                </SignedIn>

                <SignedOut>
                    <Button asChild className="button bg-purple-gradient bg-cover">
                        <Link href="/sign-in">Login</Link> 
                    </Button>
                </SignedOut>
            </nav>
        </div>
    </aside>
  )
}

export default Sidebar