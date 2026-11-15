import { ContactCtas } from "@/components/ContactCtas";
import { whyPoints } from "@/lib/site";

export function WhyUs() {
  return (
    <section
      className="section-pad border-t border-border bg-surface"
      aria-labelledby="why-title"
    >
      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div className="section-head lg:sticky lg:top-[calc(var(--header-h)+1.5rem)] lg:self-start">
            <p className="eyebrow">Pourquoi ce cabinet</p>
            <h2
              id="why-title"
              className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
            >
              Une relation de confiance avec les familles
            </h2>
            <p className="lede mt-4">
              Des engagements concrets pour rassurer les parents et accompagner
              chaque enfant.
            </p>
            <ContactCtas className="mt-8" />
          </div>

          <ul className="space-y-0">
            {whyPoints.map((point, index) => (
              <li
                key={point.title}
                className="border-t border-border py-7 first:border-t-0 first:pt-0"
              >
                <p className="text-sm font-semibold tabular-nums text-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 font-display text-2xl text-navy">
                  {point.title}
                </h3>
                <p className="mt-2 max-w-xl text-[1.02rem] leading-relaxed text-muted">
                  {point.description}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
