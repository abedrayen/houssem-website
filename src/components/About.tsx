import { ContactCtas } from "@/components/ContactCtas";

export function About() {
  return (
    <section
      id="cabinet"
      className="section-pad border-t border-border bg-surface"
      aria-labelledby="about-title"
    >
      <div className="container-page max-w-3xl">
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
        <ContactCtas className="mt-8" />
      </div>
    </section>
  );
}
