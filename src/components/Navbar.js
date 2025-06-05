const Navbar = () => {
  return (
    <div className="flex flex-row mb-4 justify-between p-4 bg-red-400 lg:bg-amber-400">
        <div>Logo</div>
        <nav >
            <ul className="flex flex-row gap-3">
                <li>Home</li>
                <li>Pelis</li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar