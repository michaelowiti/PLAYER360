

"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-white text-gray-900
        flex items-center justify-between
        px-6 md:px-8 py-4 shadow-sm
        border-b border-gray-100
      "
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold tracking-wide text-gray-900">
        Player360
      </Link>

      {/* Desktop Menu */}
      <nav className="hidden md:flex space-x-8 font-medium">
        <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
        <Link href="/about" className="hover:text-gray-700 transition-colors">About us</Link>
        <Link href="/services" className="hover:text-gray-700 transition-colors">Services</Link>
        <Link href="/testimonials" className="hover:text-gray-700 transition-colors">Testimonials</Link>
        <Link href="/blog" className="hover:text-gray-700 transition-colors">Blog</Link>
        <Link href="/contact" className="hover:text-gray-700 transition-colors">Contact us</Link>
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-2xl focus:outline-none"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            absolute top-full left-0 w-full
            bg-white text-gray-900
            flex flex-col space-y-4 p-6 md:hidden
            border-t border-gray-100 shadow-lg
          "
        >
          <Link href="/" className="hover:text-gray-700 transition-colors">Home</Link>
          <Link href="/about" className="hover:text-gray-700 transition-colors">About us</Link>
          <Link href="/services" className="hover:text-gray-700 transition-colors">Services</Link>
          <Link href="/testimonials" className="hover:text-gray-700 transition-colors">Testimonials</Link>
          <Link href="/blog" className="hover:text-gray-700 transition-colors">Blog</Link>
          <Link href="/contact" className="hover:text-gray-700 transition-colors">Contact us</Link>
        </div>
      )}
    </header>
  );
}
