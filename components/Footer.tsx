import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Logo from "../public/assets/logo.png";

export default function Footer() {
  return (
    <footer className="font-poppins max-w-7xl mx-auto bg-[#212428] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: Contact & Company Info */}
          <div className="lg:ml-[20%] space-y-6">
            <div>
              <Link href={"/"} className="flex mb-4 md:mb-0">
                <Image
                  src={Logo}
                  width={160}
                  height={80}
                  alt={"Burraq Digits"}
                  className="w-64 md:w-40"
                />
              </Link>
              <div className="mt-2 h-1 w-12 bg-[#3a69ff]"></div>
            </div>

            <p className="text-[#e5e7eb]">
              We create digital experiences that transform businesses and drive
              growth through innovative solutions.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="mr-3 h-10 w-10 text-[#3a69ff]" />
                <span className="text-[#e5e7eb]">
                  Admin, Near Osam Masjid, A-146, Block 8 admin society,
                  Karachi, Pakistan
                </span>
              </div>

              <div className="flex items-center">
                <Phone className="mr-3 h-5 w-5 text-[#3a69ff]" />
                <Link href={"tel:+923202019118"}>
                  <span className="text-[#e5e7eb]">+923202019118</span>
                </Link>
              </div>

              <div className="flex items-center">
                <Mail className="mr-3 h-5 w-5 text-[#3a69ff]" />
                <span className="text-[#e5e7eb]">contact@burraqdigits.com</span>
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="rounded-full bg-[#212428] p-2 text-[#e5e7eb] transition-colors hover:bg-[#3a69ff] hover:text-white"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#212428] p-2 text-[#e5e7eb] transition-colors hover:bg-[#3a69ff] hover:text-white"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#212428] p-2 text-[#e5e7eb] transition-colors hover:bg-[#3a69ff] hover:text-white"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="rounded-full bg-[#212428] p-2 text-[#e5e7eb] transition-colors hover:bg-[#3a69ff] hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="max-w-sm space-y-6 md:mx-auto">
            <div>
              <h3 className="text-xl font-semibold">Our Services</h3>
              <div className="mt-2 h-1 w-12 bg-[#3a69ff]"></div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/web-development"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/app-development"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  App Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/influencer-marketing"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Influencer Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/ui-ux-design"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  UI/UX Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/seo"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Search Engine Optimization
                </Link>
              </li>
              <li>
                <Link
                  href="/services/logo-design"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Logo Design
                </Link>
              </li>
              <li>
                <Link
                  href="/services/events-management"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Events Management
                </Link>
              </li>
              <li>
                <Link
                  href="/services/outdoor-marketing"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Outdoor Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Useful Links */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold">Useful Links</h3>
              <div className="mt-2 h-1 w-12 bg-[#3a69ff]"></div>
            </div>

            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Our Work
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="inline-block text-[#e5e7eb] transition-colors hover:text-[#3a69ff]"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-14 -mb-12 border-t border-[#2a2d33] pt-6 text-center text-[#4b5563]">
          <p>
            © {new Date().getFullYear()} Burraq Digits. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
