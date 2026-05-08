'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import React, { useState } from 'react';
import { collections, products } from '@/lib/data';
import ProductCard from '@/components/collections/ProductCard';
import FilterSidebar from '@/components/collections/FilterSidebar';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Props {
  params: Promise<{ category: string }>;
}

export default function CollectionPage({ params }: Props) {
  const { category } = React.use(params);
  const collection = collections.find((c) => c.slug === category);
  if (!collection) notFound();

  const collectionProducts = products.filter((p) => p.collection === category);

  const [activeFilters, setActiveFilters] = useState<Record<string, string[]>>({});

  const toggleFilter = (group: string, value: string) => {
    setActiveFilters((prev) => {
      const current = prev[group] || [];
      const updated = current.includes(value)
        ? current.filter((v) => v !== value)
        : [...current, value];
      return { ...prev, [group]: updated };
    });
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={collection.heroImage}
            alt={collection.name}
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/10" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12 pb-14">
          <AnimatedSection>
            <p
              className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-3"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Collection
            </p>
            <h1
              className="text-white text-5xl md:text-6xl"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              {collection.name}
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-8 md:px-12 border-b border-[#2C2C2C]/08">
        <div className="max-w-[1400px] mx-auto">
          <p
            className="text-[#2C2C2C]/55 text-base leading-[1.85] max-w-2xl"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            {collection.description}
          </p>
        </div>
      </section>

      {/* Grid + Filters */}
      <section className="py-16 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto flex gap-14">
          <FilterSidebar activeFilters={activeFilters} onChange={toggleFilter} />

          <div className="flex-1">
            <div className="flex justify-between items-center mb-10">
              <p
                className="text-[11px] text-[#2C2C2C]/40"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {collectionProducts.length} pieces
              </p>
            </div>

            {collectionProducts.length === 0 ? (
              <div className="text-center py-24">
                <p
                  className="text-[#2C2C2C]/40 text-sm"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                >
                  New pieces arriving shortly. Please inquire for private previews.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-14">
                {collectionProducts.map((product, i) => (
                  <AnimatedSection key={product.slug} delay={i * 0.06}>
                    <ProductCard
                      slug={product.slug}
                      name={product.name}
                      collection={product.collection}
                      category={product.category}
                      gemstone={product.gemstone}
                      images={product.images}
                    />
                  </AnimatedSection>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
