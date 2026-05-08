import AnimatedSection from '@/components/ui/AnimatedSection';

export default function IntroSection() {
  return (
    <section className="py-28 md:py-36 px-8">
      <div className="max-w-2xl mx-auto text-center">
        <AnimatedSection>
          <p
            className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-8"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            Our Philosophy
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="text-4xl md:text-5xl text-[#2C2C2C] leading-[1.15] mb-10"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
          >
            Jewels Chosen With Uncommon Discretion
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p
            className="text-[#2C2C2C]/55 text-base leading-[1.85] mb-6"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            For over three decades, Maison Aure has served private collectors, estates, and 
            discerning individuals seeking jewelry of genuine rarity. Our collection is assembled 
            through a global network of relationships cultivated over a lifetime — not aggregated 
            from auctions or wholesalers.
          </p>
          <p
            className="text-[#2C2C2C]/55 text-base leading-[1.85]"
            style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
          >
            Every piece we present has been personally examined, authenticated, and chosen because 
            it meets a single standard: we would be proud to give it to someone we love.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3} className="mt-12">
          <div className="w-16 h-px bg-[#A8935A] mx-auto" />
        </AnimatedSection>
      </div>
    </section>
  );
}
