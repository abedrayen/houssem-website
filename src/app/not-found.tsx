import Link from "next/link";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="section-pad flex flex-1 items-center pt-[calc(var(--header-h)+2rem)]">
      <div className="container-page max-w-xl">
        <p className="eyebrow">Erreur 404</p>
        <h1 className="mt-3 font-display text-[clamp(1.9rem,4vw,2.75rem)]">
          Page introuvable
        </h1>
        <p className="lede mt-4">
          La page demandée n’existe pas ou a été déplacée. Retournez à
          l’accueil du cabinet de {site.name}.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/" className="btn btn-primary">
            Retour à l’accueil
          </Link>
          <Link href="/#contact" className="btn btn-secondary">
            Contacter le cabinet
          </Link>
        </div>
      </div>
    </main>
  );
}
