'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface CollectionFeatureProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
  href: string;
  reverse?: boolean;
  accent?: string;
}

export default function CollectionFeature({
  name,
  tagline,
  description,
  image,
  href,
  reverse = false,
  accent = '#A8935A',
}: CollectionFeatureProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
      {/* Image */}
      <div className={`relative overflow-hidden ${reverse ? 'lg:order-2' : ''}`}>
        <motion.div
          initial={{ scale: 1.08 }}
          animate={isInView ? { scale: 1 } : { scale: 1.08 }}
          transition={{ duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Text */}
      <div
        className={`bg-[#F5EFE6] flex flex-col justify-center px-12 md:px-16 lg:px-20 py-20 ${
          reverse ? 'lg:order-1' : ''
        }`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p
            className="text-[10px] tracking-[0.35em] uppercase mb-6"
            style={{ fontFamily: 'Inter, sans-serif', color: accent }}
          >
            {name}
          </p>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-[#2C2C2C] mb-8 leading-[1.1]"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
        >
          {tagline}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, delay: 0.45 }}
          className="text-[#2C2C2C]/55 text-sm leading-[1.9] max-w-md mb-12"
          style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
        >
          {description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href={href}
            className="inline-flex items-center gap-4 text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C]/60 hover:text-[#2C2C2C] transition-colors group"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Explore Collection
            <span className="block w-8 h-px bg-current transition-all duration-500 group-hover:w-14" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
