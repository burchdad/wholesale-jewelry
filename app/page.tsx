import Hero from "@/components/home/Hero";
import IntroSection from "@/components/home/IntroSection";
import CollectionFeature from "@/components/home/CollectionFeature";
import TrustSection from "@/components/home/TrustSection";
import { collections } from "@/lib/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      {collections.map((col, i) => (
        <CollectionFeature
          key={col.slug}
          name={col.name}
          tagline={col.tagline}
          description={col.description}
          image={col.heroImage}
          href={`/collections/${col.slug}`}
          reverse={i % 2 !== 0}
        />
      ))}
      <TrustSection />
    </>
  );
}
