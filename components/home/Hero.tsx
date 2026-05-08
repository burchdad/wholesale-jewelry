'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=2000&q=90"
          alt="Luxury jewelry hero"
          fill
          className="object-cover object-center scale-[1.02]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-8 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, letterSpacing: '0.5em' }}
          animate={{ opacity: 1, letterSpacing: '0.4em' }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-[10px] text-white/60 uppercase mb-8"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          New York · Est. 1987
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-white text-5xl md:text-7xl leading-[1.05] mb-8"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
        >
          Extraordinary Jewelry.
          <br />
          <em style={{ fontStyle: 'italic' }}>Timeless Legacy.</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-white/60 text-base mb-12 max-w-sm mx-auto leading-relaxed"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          Curated fine jewelry & rare estate pieces, presented by private appointment.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/collections/high-jewelry"
            className="inline-flex items-center justify-center border border-white/40 text-white text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-[#2C2C2C] transition-all duration-500"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore Collections
          </Link>
          <Link
            href="/appointment"
            className="inline-flex items-center justify-center border border-white/20 text-white/70 text-[10px] tracking-[0.3em] uppercase px-10 py-4 hover:border-white/50 hover:text-white transition-all duration-500"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Book Appointment
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-full h-1/2 bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
