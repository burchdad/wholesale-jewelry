import type { Metadata } from 'next';
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
