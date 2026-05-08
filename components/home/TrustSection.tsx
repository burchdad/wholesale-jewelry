import AnimatedSection from '@/components/ui/AnimatedSection';

const pillars = [
  { number: '01', title: 'Authenticity', body: 'Every piece is personally authenticated. We work with GIA, AGL, GRS, and Gübelin laboratories to ensure complete confidence.' },
  { number: '02', title: 'Discretion', body: 'Your privacy is paramount. We conduct all transactions with the same confidentiality we extend to our most sensitive estate acquisitions.' },
  { number: '03', title: 'Curation', body: 'We present fewer than 200 pieces at any time. If it does not meet our personal standard of excellence, it is not offered.' },
];

export default function TrustSection() {
  return (
    <section className="py-28 md:py-36 px-8 bg-[#2C2C2C]">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left */}
          <div>
            <AnimatedSection>
              <p
                className="text-[10px] tracking-[0.35em] uppercase text-[#A8935A] mb-8"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Why Maison Aure
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2
                className="text-4xl md:text-5xl text-[#F8F5F0] leading-[1.15]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 300 }}
              >
                A Reputation Built Over Thirty Years of Quiet Excellence
              </h2>
            </AnimatedSection>
          </div>

          {/* Right — pillars */}
          <div className="space-y-12">
            {pillars.map((p, i) => (
              <AnimatedSection key={p.number} delay={i * 0.12}>
                <div className="flex gap-8">
                  <span
                    className="text-[#A8935A]/40 text-sm flex-shrink-0 pt-1"
                    style={{ fontFamily: 'Cormorant Garamond, serif' }}
                  >
                    {p.number}
                  </span>
                  <div>
                    <h3
                      className="text-[#F8F5F0] text-xl mb-3"
                      style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 400 }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-[#F8F5F0]/45 text-sm leading-[1.8]"
                      style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300 }}
                    >
                      {p.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
