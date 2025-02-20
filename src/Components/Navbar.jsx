"use client"

import { useState } from "react"
import { Search, Heart, Menu, User, Home, Building, MapPin, Phone } from "lucide-react"

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleSearch = () => {
    if (searchQuery.trim()) {
      console.log(`Searching for: ${searchQuery}`)
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className="fixed left-0 right-0 top-0 z-50 mx-auto my-4 w-[90%] max-w-7xl">
      <nav className="rounded-full border border-gray-200 bg-white px-6 py-2 shadow-md">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2 text-2xl font-bold">
              <Home className="h-6 w-6 text-blue-600" />
              <span>EstateHub</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden space-x-1 md:flex">
            {[
              { name: "Buy", path: "/buy", icon: Building },
              { name: "Rent", path: "/rent", icon: Home },
              { name: "Locations", path: "/locations", icon: MapPin },
              { name: "Contact", path: "/contact", icon: Phone },
            ].map(({ name, path, icon: Icon }) => (
              <a
                key={name}
                href={path}
                className="flex items-center space-x-1 rounded-full px-4 py-2 text-gray-600 transition duration-300 hover:bg-gray-100 hover:text-black"
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </a>
            ))}
          </div>

          {/* Search & Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:flex">
              <input
                type="text"
                placeholder="Search properties..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[200px] rounded-full border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
              />
              <button
                className="absolute right-0 top-0 rounded-full p-2 text-gray-400 hover:text-gray-600"
                onClick={handleSearch}
              >
                <Search className="h-4 w-4" />
                <span className="sr-only">Search</span>
              </button>
            </div>

            {/* Favorites */}
            <button className="hidden rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black md:flex">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Favorites</span>
            </button>

            {/* User Account */}
            <button className="hidden rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Account</span>
            </button>

            {/* List Property Button */}
            <button className="hidden rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 md:flex">
              List Property
            </button>

            {/* Mobile Menu Button */}
            <button
              className="rounded-full p-2 text-gray-600 hover:bg-gray-100 hover:text-black md:hidden"
              onClick={toggleMenu}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          <div className="flex h-full flex-col p-4">
            <div className="flex justify-end">
              <button className="p-2 text-gray-600 hover:text-black" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="mt-6 flex flex-col space-y-4">
              {[
                { name: "Buy", path: "/buy", icon: Building },
                { name: "Rent", path: "/rent", icon: Home },
                { name: "Locations", path: "/locations", icon: MapPin },
                { name: "Contact", path: "/contact", icon: Phone },
                { name: "Favorites", path: "/favorites", icon: Heart },
                { name: "Account", path: "/account", icon: User },
              ].map(({ name, path, icon: Icon }) => (
                <a
                  key={name}
                  href={path}
                  className="flex items-center space-x-2 rounded-lg px-4 py-2 text-gray-600 transition duration-300 hover:bg-gray-100 hover:text-black"
                >
                  <Icon className="h-5 w-5" />
                  <span>{name}</span>
                </a>
              ))}
              <div className="pt-4">
                <button className="w-full rounded-full bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
                  List Property
                </button>
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
                />
                <button
                  className="absolute right-0 top-0 rounded-r-lg p-2 text-gray-400 hover:text-gray-600"
                  onClick={handleSearch}
                >
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Navbar;