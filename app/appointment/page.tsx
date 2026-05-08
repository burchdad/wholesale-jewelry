import type { Metadata } from 'next';
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
