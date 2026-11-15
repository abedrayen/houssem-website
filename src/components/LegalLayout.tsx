import Link from "next/link";
import { site } from "@/lib/site";

type LegalLayoutProps = {
  title: string;
  children: React.ReactNode;
};

export function LegalLayout({ title, children }: LegalLayoutProps) {
  return (
    <main className="section-pad pt-[calc(var(--header-h)+2rem)]">
      <article className="container-page max-w-3xl">
        <p className="eyebrow">{site.name}</p>
        <h1 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.75rem)]">
          {title}
        </h1>
        <div className="mt-8 space-y-8 text-base leading-relaxed text-muted">
          {children}
        </div>
        <p className="mt-10">
          <Link
            href="/#accueil"
            className="font-semibold text-navy underline-offset-2 hover:underline"
          >
            Retour à l’accueil
          </Link>
        </p>
      </article>
    </main>
  );
}
