"use client"

import type React from "react"

import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import Logo from "../public/assets/logo.png"
import Link from "next/link"
import { FaArrowRight } from "react-icons/fa"
import { CgClose, CgMenuRight } from "react-icons/cg"
import { ChevronDown, ChevronRight } from "lucide-react"

const services = [
  { name: "Web Development", href: "/services/web-development" },
  { name: "Digital Marketing", href: "/services/digital-marketing" },
  { name: "UI/UX Design", href: "/services/ui-ux-design" },
  { name: "App Development", href: "/services/app-development" },
  { name: "Branding", href: "/services/branding" },
  { name: "E-commerce", href: "/services/e-commerce" },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)
  const isMobileOrTablet = useRef(false)

  // Check if we're on mobile/tablet (client-side only)
  useEffect(() => {
    const checkDevice = () => {
      isMobileOrTablet.current = window.innerWidth < 1024
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)

    return () => {
      window.removeEventListener("resize", checkDevice)
    }
  }, [])

  // Handle dropdown hover behavior with delay (desktop only)
  const handleMouseEnter = () => {
    if (isMobileOrTablet.current) return

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setServicesOpen(true)
  }

  const handleMouseLeave = () => {
    if (isMobileOrTablet.current) return

    // Add a delay before closing the dropdown
    timeoutRef.current = setTimeout(() => {
      setServicesOpen(false)
    }, 300) // 300ms delay gives enough time to move to the dropdown
  }

  // Toggle services dropdown on mobile/tablet
  const toggleServicesDropdown = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent event from bubbling up
    if (isMobileOrTablet.current) {
      setServicesOpen(!servicesOpen)
    }
  }

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function handleLinkClick() {
    setIsMenuOpen(false)
    setServicesOpen(false)
  }

  function getMenuClassNames() {
    let menuClasses = []

    if (isMenuOpen) {
      menuClasses = [
        "flex",
        "absolute",
        "w-full",
        "h-auto",
        "min-h-[48vh]",
        "mt-2",
        "px-8",
        "py-12",
        "gap-10",
        "flex-col",
        "left-0",
        "top-[70px]",
        "bg-background/90",
        "z-50",
        "backdrop-blur-sm",
      ]
    } else {
      menuClasses = ["hidden", "lg:flex", "lg:ml-auto", "flex-wrap", "items-center", "justify-center"] // Changed from md: to lg:
    }
    return menuClasses.join(" ")
  }

  return (
    <header className="max-w-7xl mx-auto py-0 -my-4 sm:my-0 sm:pt-6 relative z-50 bg-transparent bg-opacity-0">

      <div className="mx-auto flex justify-between pt-8 sm:pt-0 p-5 flex-col lg:flex-row z-50">
        <div className="flex justify-between items-center">	
        <Link href={"/"} className="mb-4 lg:mb-0">
          <Image src={Logo || "/placeholder.svg"} width={160} height={80} alt={"Burraq Digits"} />
        </Link>

        <button
          className="lg:hidden inline-flex items-center -mt-4 text-4xl text-gray-600 hover:text-accent z-10"
          onClick={(e) => {
            e.stopPropagation() // Prevent event from bubbling up
            setIsMenuOpen(!isMenuOpen)
          }}
          aria-label="Toggle mobile menu"
        >
          {isMenuOpen ? <CgClose /> : <CgMenuRight />}
        </button>
        </div>
        <nav className={getMenuClassNames()}>
          <Link href={"/"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">
            Home
          </Link>
          <Link href={"/about"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">
            About Us
          </Link>

          {/* Services with dropdown */}
          <div className="relative" ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {/* Desktop: Use div with hover, Mobile/Tablet: Use button with click */}
            <div className="mr-5 text-white text-base hover:text-accent cursor-pointer flex items-center">
              <Link href="/services" className="hover:text-accent" onClick={handleLinkClick}>
                Our Services
              </Link>
              <button
                onClick={toggleServicesDropdown}
                className="ml-1 flex items-center focus:outline-none"
                aria-label="Toggle services menu"
              >
                <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            {/* Dropdown menu */}
            {servicesOpen && (
              <div
                className={`${
                  isMenuOpen
                    ? "relative shadow-none bg-transparent mt-4 ml-4 w-full"
                    : "absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-[#1a1c20] ring-1 ring-black ring-opacity-5"
                } z-50`}
              >
                <div className="py-2">
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      onClick={handleLinkClick}
                      className="px-4 py-3 text-sm text-gray-300 hover:bg-accent/10 hover:text-accent flex items-center"
                    >
                      <ChevronRight className="mr-2 h-4 w-4 text-accent" />
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={"/projects"} onClick={handleLinkClick} className="mr-5 text-white text-base hover:text-accent">
            Our Projects
          </Link>

          <button className="group inline-flex items-center text-center justify-center text-white bg-gradient-to-br from-blue-900 via-accent to-blue-700 hover:from-blue-800 py-4 px-10 lg:py-2 lg:px-8 rounded-full font-medium lg:text-md transition-all duration-300 transform shadow-lg shadow-accent/20 text-base mt-4 lg:mt-0 lg:ml-10">
            <Link href={"/contact"} onClick={handleLinkClick}>
              GET A FREE QUOTE
            </Link>
            <FaArrowRight className="pl-3 text-2xl" />
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
