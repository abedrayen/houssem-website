import Link from "next/link";
import { navLinks, site, whatsappUrl } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-navy pb-14 pt-14 text-white">
      <div className="container-page grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <p className="font-display text-2xl text-white">{site.name}</p>
          <p className="mt-1 text-sm text-white/70">
            {site.title} à {site.city}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
            {site.address.full}
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm">
            <a
              href={site.phoneHref}
              className="font-semibold text-white hover:text-peach"
            >
              {site.phoneInternational}
            </a>
            <a
              href={whatsappUrl()}
              className="font-semibold text-white hover:text-peach"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/55">
            Navigation
          </p>
          <ul className="mt-3 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/75 hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.08em] text-white/55">
            Informations
          </p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link
                href="/mentions-legales"
                className="text-white/75 hover:text-white"
              >
                Mentions légales
              </Link>
            </li>
            <li>
              <Link
                href="/politique-de-confidentialite"
                className="text-white/75 hover:text-white"
              >
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="text-white/75 hover:text-white">
                Prendre rendez-vous
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page mt-10 border-t border-white/15 pt-6">
        <p className="text-xs leading-relaxed text-white/55">
          Avertissement médical : les informations présentées sur ce site sont
          générales et destinées à aider les parents. Elles ne remplacent pas un
          avis médical personnalisé. En cas d’urgence, contactez immédiatement
          les services d’urgence.
        </p>
        <p className="mt-3 text-xs text-white/45">
          © 2026 {site.fullTitle}. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
