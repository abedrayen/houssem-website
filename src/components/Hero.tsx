import Image from "next/image";
import Link from "next/link";
import { ContactCtas } from "@/components/ContactCtas";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden bg-background pt-[calc(var(--header-h)+1.25rem)] pb-12 sm:pb-16 lg:pb-20"
      aria-labelledby="hero-title"
    >
      <div className="container-page grid items-center gap-10 lg:grid-cols-[1fr_0.92fr] lg:gap-14 xl:gap-16">
        <div className="reveal max-w-xl">
          <p className="eyebrow">
            {site.title} à {site.city}
          </p>
          <h1
            id="hero-title"
            className="mt-3 font-display text-[clamp(1.85rem,4.2vw,2.85rem)] leading-[1.18]"
          >
            Un accompagnement attentif pour la santé et le développement de
            votre enfant.
          </h1>
          <p className="lede mt-4">
            Consultations pédiatriques, suivi du nourrisson et conseils aux
            parents — au cabinet de {site.city}.
          </p>
          <ContactCtas className="mt-7" />
          <p className="mt-4">
            <Link
              href="/#cabinet"
              className="text-sm font-semibold text-navy underline-offset-2 hover:underline"
            >
              Découvrir le cabinet
            </Link>
          </p>
        </div>

        <div className="reveal reveal-delay-1 mx-auto w-full max-w-[28rem] lg:max-w-none">
          <figure className="portrait-stage">
            <Image
              src={site.portrait.src}
              alt={site.portrait.alt}
              width={site.portrait.width}
              height={site.portrait.height}
              priority
              className="aspect-[4/5] h-auto w-full object-cover object-[center_12%]"
              sizes="(max-width: 1024px) 88vw, 440px"
            />
            <figcaption className="sr-only">
              Portrait professionnel de {site.fullTitle}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
