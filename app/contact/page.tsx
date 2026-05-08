import type { Metadata } from 'next';
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
