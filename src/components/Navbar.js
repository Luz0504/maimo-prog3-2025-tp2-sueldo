'use client'

import Image from "next/image"
import Link from "next/link"

const Navbar = () => {

  return (
    <div className="flex flex-row justify-between px-15 py-5 bg-gradient-to-b bg-black items-center text-amber-50">
        
        <div className="flex direction-row items-center">
                <Image 
                src= {'/assets/reel.png'}
                width={70}
                height={100}
                alt="reel"
                />
                <Link href='/'><h3>ReelSearch</h3></Link>
        </div>
        <nav >
            <ul className="flex flex-row gap-3">
                <Link href='/'><li>Home</li></Link>
                <Link href='/favorites'><li>Favoritos</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar