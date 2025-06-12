import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between p-4 bg-teal-950 lg:bg-teal-950 items-center text-amber-50">
        
        <div className="flex direction-row items-center">
                <Image 
                src= {'/assets/reel.png'}
                width={70}
                height={100}
                alt="reel"
                />
                <div>PelisMax</div>
        </div>
        <nav >
            <ul className="flex flex-row gap-3">
                <Link href='/'><li>Home</li></Link>
                <li>Pelis</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar