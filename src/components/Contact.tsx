import { ContactCtas } from "@/components/ContactCtas";
import { site } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="section-pad border-t border-border bg-surface"
      aria-labelledby="contact-title"
    >
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <p className="eyebrow">Contact</p>
            <h2
              id="contact-title"
              className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
            >
              Prendre rendez-vous
            </h2>
            <p className="lede mt-4">
              Les rendez-vous se prennent par téléphone ou WhatsApp. Aucune
              information médicale sensible n’est demandée via le site.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-navy">Téléphone</h3>
                <a
                  href={site.phoneHref}
                  className="mt-1 inline-block text-2xl font-semibold tracking-tight text-navy underline-offset-4 hover:underline"
                >
                  {site.phoneInternational}
                </a>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy">Adresse</h3>
                <p className="mt-1 leading-relaxed text-muted">
                  {site.address.line1}
                  <br />
                  {site.address.line2}
                  <br />
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.country}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-semibold text-navy">Horaires</h3>
                <p className="mt-1 text-muted">{site.hours.label}</p>
              </div>
            </div>

            <ContactCtas showDirections className="mt-8" />
          </div>

          <div className="min-h-[320px] overflow-hidden rounded-[var(--radius-md)] border border-border bg-background lg:min-h-[440px]">
            <iframe
              title={`Carte du cabinet de ${site.name} à ${site.city}`}
              src={site.maps.embedUrl}
              className="h-full min-h-[320px] w-full border-0 lg:min-h-[440px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
