#!/usr/bin/env python3
"""Script to write all page files for the luxury jewelry site."""
import os

pages = {}

pages['/workspaces/wholesale-jewelry/app/collections/[category]/page.tsx'] = r"""'use client';

import { notFound } from 'next/navigation';
import Image from 'next/image';
import { useState } from 'react';
import { collections, products } from '@/lib/data';
import ProductCard from '@/components/collections/ProductCard';
import FilterSidebar from '@/components/collections/FilterSidebar';
import AnimatedSection from '@/components/ui/AnimatedSection';

interface Props {
  params: { category: string };
}

export default function CollectionPage({ params }: Props) {
  const collection = collections.find((c) => c.slug === params.category);
  if (!collection) notFound();

  const collectionProducts = products.filter((p) => p.collection === params.category);

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
"""

pages['/workspaces/wholesale-jewelry/app/product/[slug]/page.tsx'] = r"""import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/lib/data';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

interface Props {
  params: { slug: string };
}

export async function generateMetadata({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description.slice(0, 160),
  };
}

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) notFound();

  const details = [
    { label: 'Gemstone', value: product.gemstone },
    { label: 'Metal', value: product.metal },
    { label: 'Era', value: product.era },
    { label: 'Designer', value: product.designer },
    { label: 'Certification', value: product.certification },
  ].filter((d) => d.value);

  return (
    <div className="pt-20">
      <div className="max-w-[1400px] mx-auto px-8 md:px-12 py-16">
        {/* Breadcrumb */}
        <nav className="mb-12">
          <ol className="flex items-center gap-3 text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/35" style={{ fontFamily: 'Inter, sans-serif' }}>
            <li><Link href="/" className="hover:text-[#2C2C2C]/60 transition-colors">Home</Link></li>
            <li>—</li>
            <li><Link href={`/collections/${product.collection}`} className="hover:text-[#2C2C2C]/60 transition-colors capitalize">{product.collection.replace('-', ' ')}</Link></li>
            <li>—</li>
            <li className="text-[#2C2C2C]/60">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Image gallery */}
          <div className="space-y-4">
            <AnimatedSection direction="fade">
              <div className="relative aspect-[4/5] bg-[#F5EFE6] overflow-hidden">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </AnimatedSection>
            {product.images[1] && (
              <AnimatedSection direction="fade" delay={0.1}>
                <div className="relative aspect-[4/3] bg-[#F5EFE6] overflow-hidden">
                  <Image
                    src={product.images[1]}
                    alt={`${product.name} detail`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </AnimatedSection>
            )}
          </div>

          {/* Details */}
          <div className="lg:pt-8">
            <AnimatedSection>
              <p
                className="text-[10px] tracking-[0.3em] uppercase text-[#A8935A] mb-4"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                {product.category}
              </p>
              <h1
                className="text-[#2C2C2C] mb-6 leading-[1.1]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                {product.name}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <p
                className="text-[#2C2C2C]/55 text-sm leading-[1.9] mb-10 border-b border-[#2C2C2C]/08 pb-10"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
              >
                {product.description}
              </p>
            </AnimatedSection>

            {/* Details table */}
            <AnimatedSection delay={0.15}>
              <div className="space-y-4 mb-10 border-b border-[#2C2C2C]/08 pb-10">
                <p
                  className="text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C]/40 mb-6"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  Piece Details
                </p>
                {details.map((d) => (
                  <div key={d.label} className="flex justify-between text-sm">
                    <span
                      className="text-[#2C2C2C]/40"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {d.label}
                    </span>
                    <span
                      className="text-[#2C2C2C]/70"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {d.value}
                    </span>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            {/* Story */}
            {product.story && (
              <AnimatedSection delay={0.2}>
                <div className="mb-10 border-b border-[#2C2C2C]/08 pb-10">
                  <p
                    className="text-[10px] tracking-[0.3em] uppercase text-[#2C2C2C]/40 mb-4"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Provenance
                  </p>
                  <p
                    className="text-[#2C2C2C]/55 text-sm leading-[1.85]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    {product.story}
                  </p>
                </div>
              </AnimatedSection>
            )}

            {/* CTAs */}
            <AnimatedSection delay={0.25}>
              <div className="flex flex-col gap-3">
                <Button href="/contact" variant="solid" size="lg" className="w-full justify-center">
                  Inquire About This Piece
                </Button>
                <Button href="/appointment" variant="outline" size="lg" className="w-full justify-center">
                  Schedule an Appointment
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </div>
  );
}
"""

pages['/workspaces/wholesale-jewelry/app/acquisitions/page.tsx'] = r"""import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';
import { brands } from '@/lib/data';

export const metadata: Metadata = {
  title: 'Estate Jewelry Acquisitions',
  description:
    'Maison Aure acquires fine jewelry, estate collections, and signed pieces from private sellers. Discreet, confidential, and expert evaluation.',
};

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    body: 'Contact us to schedule a confidential consultation. We can meet in person at our New York office or conduct a preliminary review via secure digital submission.',
  },
  {
    number: '02',
    title: 'Expert Evaluation',
    body: 'Our team examines each piece individually — assessing authenticity, condition, provenance, and current market demand. All evaluations are conducted by certified gemologists.',
  },
  {
    number: '03',
    title: 'Private Offer',
    body: 'We present a written offer based on current wholesale and retail market data. There is no obligation, and all information is treated with the utmost discretion.',
  },
  {
    number: '04',
    title: 'Prompt Settlement',
    body: 'Upon acceptance, we handle all documentation and settlement is arranged immediately — typically within 24 to 48 hours of agreement.',
  },
];

export default function AcquisitionsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[450px] flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=1800&q=85"
            alt="Estate jewelry acquisitions"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C2C2C]/80 via-[#2C2C2C]/30 to-transparent" />
        </div>
        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-8 md:px-12 pb-16">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-white/50 mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Private Service
            </p>
            <h1
              className="text-white text-5xl md:text-6xl lg:text-7xl max-w-2xl leading-[1.05]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              We Buy Fine Jewelry & Estate Collections
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* Intro */}
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <h2
              className="text-[#2C2C2C] text-4xl md:text-5xl leading-[1.1] mb-0"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Discreet Acquisition by Trusted Specialists
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <p className="text-[#2C2C2C]/55 text-sm leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Whether you are managing an estate, consolidating a collection, or simply ready to part with a cherished piece, Maison Aure offers a private and respectful acquisition process. We work with discretion, speed, and the kind of expertise that only comes from decades in the trade.
            </p>
            <p className="text-[#2C2C2C]/55 text-sm leading-[1.9] mt-5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Our network of private buyers and collectors allows us to offer competitive prices that auction houses and retail jewelers simply cannot match — without the commissions, waiting periods, or public exposure.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-8 md:px-12 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-12" style={{ fontFamily: 'Inter, sans-serif' }}>
              Our Process
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div>
                  <span
                    className="text-[#A8935A]/40 text-sm block mb-5"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {step.number}
                  </span>
                  <h3
                    className="text-[#2C2C2C] text-xl mb-4"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[#2C2C2C]/50 text-sm leading-[1.8]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    {step.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Brands accepted */}
      <section className="py-20 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <AnimatedSection>
            <p className="text-[10px] tracking-[0.35em] uppercase text-[#2C2C2C]/40 mb-10 text-center" style={{ fontFamily: 'Inter, sans-serif' }}>
              Signed Jewelry & Designer Houses We Acquire
            </p>
          </AnimatedSection>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {brands.map((brand, i) => (
              <AnimatedSection key={brand} delay={i * 0.05}>
                <span
                  className="text-[#2C2C2C]/30 text-sm tracking-[0.15em]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                >
                  {brand}
                </span>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection delay={0.3}>
            <p className="text-center text-[11px] text-[#2C2C2C]/35 mt-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              And many others. We evaluate all fine jewelry regardless of maker.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-12 bg-[#2C2C2C]">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <h2
              className="text-[#F8F5F0] text-4xl md:text-5xl mb-6 leading-[1.1]"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
            >
              Begin a Confidential Conversation
            </h2>
            <p className="text-[#F8F5F0]/45 text-sm leading-[1.8] mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
              Reach out to arrange a private consultation. All inquiries are handled with complete discretion.
            </p>
            <Button href="/contact" variant="outline" size="lg" className="border-white/30 text-white/70 hover:border-white hover:text-white">
              Begin Consultation
            </Button>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
"""

pages['/workspaces/wholesale-jewelry/app/about/page.tsx'] = r"""import type { Metadata } from 'next';
import Image from 'next/image';
import AnimatedSection from '@/components/ui/AnimatedSection';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'About Maison Aure',
  description:
    'Three decades of expertise in fine and estate jewelry. Private jewelers to discerning collectors in New York and beyond.',
};

const values = [
  {
    title: 'Three Decades of Experience',
    body: 'Founded in 1987, Maison Aure has built its reputation through quiet excellence — never advertising aggressively, growing entirely through the trust of private clients and estate families.',
  },
  {
    title: 'Global Sourcing Network',
    body: 'Our relationships span every major gem-producing region and auction room. When something extraordinary becomes available, we are often among the first to know.',
  },
  {
    title: 'Certified Expertise',
    body: 'Our team includes GIA-trained gemologists and professionals with decades of experience in authenticating and valuing estate jewelry, signed pieces, and rare gemstones.',
  },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-28 px-8 md:px-12 bg-[#F5EFE6]">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Our Story
              </p>
              <h1
                className="text-[#2C2C2C] leading-[1.1] mb-10"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}
              >
                A Private Jewelry House Built on Trust
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.15}>
              <p className="text-[#2C2C2C]/55 text-sm leading-[1.9] mb-6" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Maison Aure was founded in New York in 1987 by a gemologist and antique dealer whose passion for extraordinary jewelry — and deep respect for the people who owned it — became the foundation of everything we do.
              </p>
              <p className="text-[#2C2C2C]/55 text-sm leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                For over three decades, we have served private collectors, multigenerational estates, and individuals who understand that the right jeweler is as important as the piece itself. Our clients trust us not because of our advertising, but because of what we do when no one is watching.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2} direction="fade">
            <div className="relative aspect-[4/5]">
              <Image
                src="https://images.unsplash.com/photo-1573408301185-9519f94816b5?w=900&q=85"
                alt="Maison Aure atelier"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((v, i) => (
              <AnimatedSection key={v.title} delay={i * 0.12}>
                <div className="border-t border-[#2C2C2C]/10 pt-10">
                  <h3
                    className="text-[#2C2C2C] text-2xl mb-5 leading-snug"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                  >
                    {v.title}
                  </h3>
                  <p
                    className="text-[#2C2C2C]/50 text-sm leading-[1.85]"
                    style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                  >
                    {v.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 px-8 md:px-12 bg-[#2C2C2C]">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <p className="text-[#F8F5F0]/30 text-8xl font-serif mb-6" style={{ fontFamily: 'Cormorant Garamond, serif' }}>"</p>
            <blockquote
              className="text-[#F8F5F0] text-3xl md:text-4xl leading-[1.3] mb-8"
              style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontStyle: 'italic' }}
            >
              Every piece of jewelry carries a story. Our role is to ensure that story continues in the right hands.
            </blockquote>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#A8935A]" style={{ fontFamily: 'Inter, sans-serif' }}>
              Founder, Maison Aure
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 md:px-12 text-center">
        <AnimatedSection>
          <h2
            className="text-[#2C2C2C] text-4xl md:text-5xl mb-6"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            We Would Love to Meet You
          </h2>
          <p className="text-[#2C2C2C]/50 text-sm leading-[1.8] max-w-md mx-auto mb-10" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
            All of our most meaningful relationships began with a single conversation.
          </p>
          <Button href="/appointment" variant="outline" size="lg">
            Request an Appointment
          </Button>
        </AnimatedSection>
      </section>
    </div>
  );
}
"""

pages['/workspaces/wholesale-jewelry/app/appointment/page.tsx'] = r"""import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import AppointmentForm from '@/components/forms/AppointmentForm';

export const metadata: Metadata = {
  title: 'Private Appointment',
  description:
    'Request a private jewelry consultation with Maison Aure. We offer white-glove, concierge-style appointments by arrangement.',
};

export default function AppointmentPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Left */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                By Appointment
              </p>
              <h1
                className="text-[#2C2C2C] leading-[1.1] mb-10"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
              >
                A Private Jewelry Experience, Arranged for You
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-[#2C2C2C]/55 text-sm leading-[1.9] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Every appointment is a private event. We prepare the pieces most relevant to your interests, ensure our full team is available, and create an environment that allows you to explore each jewel with the time and calm it deserves.
              </p>
              <p className="text-[#2C2C2C]/55 text-sm leading-[1.9]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Whether you are searching for an engagement ring, building a collection, or simply curious about a category, we will tailor your visit entirely to you.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2} className="mt-14">
              <div className="space-y-6 border-t border-[#2C2C2C]/08 pt-12">
                {[
                  { label: 'Location', value: 'Private Showroom, New York, NY' },
                  { label: 'Availability', value: 'Monday – Saturday, by arrangement' },
                  { label: 'Duration', value: 'Typically 45 – 90 minutes' },
                  { label: 'Cost', value: 'Complimentary' },
                ].map((item) => (
                  <div key={item.label} className="flex justify-between text-sm border-b border-[#2C2C2C]/05 pb-4">
                    <span className="text-[#2C2C2C]/35" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.label}</span>
                    <span className="text-[#2C2C2C]/65" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.15} direction="fade">
            <AppointmentForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
"""

pages['/workspaces/wholesale-jewelry/app/contact/page.tsx'] = r"""import type { Metadata } from 'next';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Maison Aure. Inquire about a piece, submit a piece for acquisition, or request a private consultation.',
};

export default function ContactPage() {
  return (
    <div className="pt-20">
      <section className="py-24 px-8 md:px-12">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-8" style={{ fontFamily: 'Inter, sans-serif' }}>
                Get In Touch
              </p>
              <h1
                className="text-[#2C2C2C] leading-[1.1] mb-10"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300, fontSize: 'clamp(2.5rem, 4vw, 4rem)' }}
              >
                We Are Here to Help
              </h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="text-[#2C2C2C]/55 text-sm leading-[1.9] mb-12" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                Whether you have a question about a specific piece, wish to discuss an acquisition, or would simply like to introduce yourself — we welcome every inquiry and respond personally to each one.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="space-y-8">
                {[
                  { label: 'Email', value: 'hello@maisonaure.com', href: 'mailto:hello@maisonaure.com' },
                  { label: 'Telephone', value: '+1 (212) 555-0000', href: 'tel:+12125550000' },
                  { label: 'Location', value: 'New York, NY — by appointment only', href: undefined },
                ].map((item) => (
                  <div key={item.label}>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-[#2C2C2C]/35 mb-1" style={{ fontFamily: 'Inter, sans-serif' }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-[#2C2C2C]/65 hover:text-[#2C2C2C] transition-colors" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-[#2C2C2C]/65" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}>{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Form */}
          <AnimatedSection delay={0.15} direction="fade">
            <ContactForm />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
"""

for path, content in pages.items():
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content)
    print(f'Written: {path}')

print('All pages written.')
