import { ContactCtas } from "@/components/ContactCtas";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section
      id="suivi"
      className="section-pad bg-background"
      aria-labelledby="services-title"
    >
      <div className="container-page">
        <div className="section-head max-w-2xl">
          <p className="eyebrow">Suivi pédiatrique</p>
          <h2
            id="services-title"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
          >
            Un suivi adapté à chaque âge
          </h2>
          <p className="lede mt-4">
            Consultations, croissance, nourrisson, vaccination et nutrition —
            selon les besoins de votre enfant.
          </p>
        </div>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {services.map((service, index) => (
            <li
              key={service.title}
              className="grid gap-3 py-6 sm:grid-cols-[7rem_1fr] sm:gap-8 md:grid-cols-[8rem_minmax(0,14rem)_1fr] md:items-baseline"
            >
              <span className="text-sm font-semibold tabular-nums text-blue">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-xl text-navy md:text-[1.35rem]">
                {service.title}
              </h3>
              <p className="text-[0.98rem] leading-relaxed text-muted sm:col-span-2 md:col-span-1">
                {service.description}
              </p>
            </li>
          ))}
        </ul>

        <p className="mt-6 max-w-3xl text-sm text-muted">
          Liste indicative. Pour un besoin précis, contactez le cabinet.
        </p>
        <ContactCtas className="mt-6" />
      </div>
    </section>
  );
}
