import Hero from '@/components/Hero';
import Features from '@/components/Features';
import SocialProof from '@/components/SocialProof';
import Works from '@/components/Work/Works';
import Skills from '@/components/Skills/Skills';
import Services from '@/components/Services';
import FAQ from '@/components/FAQ';
import { ScrollProvider } from '@/components/Providers/ScrollProvider';

export default function Page() {
  return (
    <ScrollProvider>
      <Hero />
      <Features />
      <SocialProof />
      <Works />
      <Skills />
      <Services />
      <FAQ />
    </ScrollProvider>
  );
}
