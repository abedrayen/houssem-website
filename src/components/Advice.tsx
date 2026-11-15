import { ContactCtas } from "@/components/ContactCtas";
import { adviceArticles } from "@/lib/site";

export function Advice() {
  return (
    <section
      id="conseils"
      className="section-pad bg-background"
      aria-labelledby="advice-title"
    >
      <div className="container-page">
        <div className="section-head max-w-2xl">
          <p className="eyebrow">Conseils aux parents</p>
          <h2
            id="advice-title"
            className="mt-3 font-display text-[clamp(1.75rem,3vw,2.5rem)]"
          >
            Des repères utiles pour le quotidien
          </h2>
          <p className="lede mt-4">
            Informations générales — elles ne remplacent pas une consultation.
          </p>
        </div>

        <ul className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
          {adviceArticles.map((article) => (
            <li
              key={article.title}
              className="border-t border-border py-7 first:border-t md:[&:nth-child(-n+2)]:border-t-0 md:[&:nth-child(-n+2)]:pt-0"
            >
              <time
                dateTime={article.date}
                className="text-xs font-semibold uppercase tracking-[0.06em] text-blue"
              >
                {article.dateLabel}
              </time>
              <h3 className="mt-2 font-display text-xl text-navy sm:text-[1.35rem]">
                {article.title}
              </h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-muted">
                {article.excerpt}
              </p>
            </li>
          ))}
        </ul>

        <ContactCtas className="mt-10" />
      </div>
    </section>
  );
}
