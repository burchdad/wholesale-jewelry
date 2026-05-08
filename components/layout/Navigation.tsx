'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'High Jewelry', href: '/collections/high-jewelry' },
  { label: 'Fine Jewelry', href: '/collections/fine-jewelry' },
  { label: 'Estate Jewelry', href: '/collections/estate-jewelry' },
  { label: 'Bridal', href: '/collections/bridal' },
  { label: 'Acquisitions', href: '/acquisitions' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? 'bg-[#F8F5F0]/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span
              className="font-serif text-xl tracking-[0.25em] text-[#2C2C2C] uppercase"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Maison
            </span>
            <span
              className="font-serif text-xl tracking-[0.25em] text-[#A8935A] uppercase ml-2"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Aure
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/70 hover:text-[#2C2C2C] transition-colors duration-300 font-light"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-5">
            <button
              aria-label="Search"
              className="hidden md:flex text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors"
            >
              <Search size={16} strokeWidth={1.5} />
            </button>
            <Link
              href="/appointment"
              className="hidden lg:inline-flex items-center border border-[#2C2C2C]/20 text-[9px] tracking-[0.25em] uppercase px-6 py-2.5 text-[#2C2C2C]/70 hover:border-[#2C2C2C] hover:text-[#2C2C2C] transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Private Appointment
            </Link>
            <button
              className="lg:hidden text-[#2C2C2C]/70"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={20} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[100] bg-[#F8F5F0] flex flex-col"
          >
            <div className="flex items-center justify-between px-8 h-20">
              <Link href="/" onClick={() => setMenuOpen(false)}>
                <span
                  className="font-serif text-xl tracking-[0.25em] text-[#2C2C2C] uppercase"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  Maison
                </span>
                <span
                  className="font-serif text-xl tracking-[0.25em] text-[#A8935A] uppercase ml-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                >
                  Aure
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="text-[#2C2C2C]/60"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex-1 flex flex-col justify-center px-12 gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block font-serif text-4xl text-[#2C2C2C] tracking-wider hover:text-[#A8935A] transition-colors"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
              >
                <Link
                  href="/appointment"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center border border-[#A8935A] text-[10px] tracking-[0.25em] uppercase px-8 py-3 text-[#A8935A] mt-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Private Appointment
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
