import { About } from "@/components/About";
import { Advice } from "@/components/Advice";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Advice />
      <Contact />
    </main>
  );
}
