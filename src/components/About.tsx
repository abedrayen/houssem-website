import Image from "next/image";
import { ContactCtas } from "@/components/ContactCtas";

const cabinetPhotos = [
  {
    src: "/images/Cabinet.jpg",
    alt: "Réception du cabinet de Dr Houssem Barhoumi, pédiatre à Sousse",
    wide: true,
  },
  {
    src: "/images/Cabinet-2.jpg",
    alt: "Enseigne Dr Houssem Barhoumi Pédiatre au cabinet",
  },
  {
    src: "/images/Cabinet-1.jpg",
    alt: "Salle d’attente du cabinet de pédiatrie à Sousse",
  },
] as const;

export function About() {
  return (
    <section
      id="cabinet"
      className="section-pad border-t border-border bg-surface"
      aria-labelledby="about-title"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <p className="eyebrow">Le cabinet</p>
          <h2
            id="about-title"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
          >
            Une approche humaine et attentive de la pédiatrie
          </h2>
          <div className="mt-6 space-y-4 text-[1.05rem] leading-relaxed text-muted">
            <p>
              Chaque consultation laisse le temps de comprendre vos
              préoccupations, d’examiner votre enfant avec attention, et
              d’expliquer clairement la suite du suivi.
            </p>
            <p>
              L’objectif : soutenir la croissance, la prévention et le bien-être
              — du nourrisson à l’enfant plus grand — dans un cadre calme et
              rassurant.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {cabinetPhotos.map((photo) => (
            <figure
              key={photo.src}
              className={`overflow-hidden rounded-[var(--radius-md)] border border-border bg-background ${
                "wide" in photo && photo.wide ? "md:col-span-2" : ""
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={800}
                className={`h-full w-full object-cover ${
                  "wide" in photo && photo.wide
                    ? "aspect-[16/10] md:aspect-[21/9]"
                    : "aspect-[4/5] sm:aspect-[4/3]"
                }`}
                sizes={
                  "wide" in photo && photo.wide
                    ? "(max-width: 768px) 100vw, 1120px"
                    : "(max-width: 768px) 100vw, 560px"
                }
              />
            </figure>
          ))}
        </div>

        <ContactCtas className="mt-10" />
      </div>
    </section>
  );
}
