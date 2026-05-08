import { notFound } from 'next/navigation';
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
