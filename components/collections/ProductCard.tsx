'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';

interface ProductCardProps {
  slug: string;
  name: string;
  collection: string;
  category: string;
  gemstone?: string;
  images: string[];
}

export default function ProductCard({ slug, name, category, gemstone, images }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link href={`/product/${slug}`} className="group block">
      <div
        className="relative overflow-hidden bg-[#F5EFE6] aspect-[3/4] mb-5"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Primary image */}
        <motion.div
          animate={{ scale: hovered ? 1.04 : 1, opacity: hovered && images[1] ? 0 : 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute inset-0"
        >
          <Image
            src={images[0]}
            alt={name}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </motion.div>

        {/* Secondary image on hover */}
        {images[1] && (
          <motion.div
            animate={{ opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={images[1]}
              alt={`${name} alternate view`}
              fill
              className="object-cover object-center"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
          </motion.div>
        )}

        {/* Inquiry overlay */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 bg-[#2C2C2C]/80 backdrop-blur-sm py-4 px-5"
        >
          <p
            className="text-[9px] tracking-[0.3em] uppercase text-white/80 text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Inquire About This Piece
          </p>
        </motion.div>
      </div>

      {/* Info */}
      <div>
        <p
          className="text-[10px] tracking-[0.2em] uppercase text-[#A8935A] mb-1"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {category}
        </p>
        <h3
          className="text-[#2C2C2C] text-lg leading-snug mb-1"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
        >
          {name}
        </h3>
        {gemstone && (
          <p
            className="text-[11px] text-[#2C2C2C]/45"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {gemstone}
          </p>
        )}
      </div>
    </Link>
  );
}
