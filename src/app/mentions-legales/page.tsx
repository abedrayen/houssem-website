import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: `Mentions légales du site du ${site.fullTitle}, cabinet de pédiatrie à ${site.city}.`,
  alternates: {
    canonical: "/mentions-legales",
  },
};

export default function MentionsLegalesPage() {
  return (
    <LegalLayout title="Mentions légales">
      <section>
        <h2 className="font-display text-2xl text-navy">Éditeur du site</h2>
        <p className="mt-3">
          {site.fullTitle}
          <br />
          {site.address.full}
          <br />
          Téléphone : {site.phoneInternational}
        </p>
        <p className="mt-3">
          Identifiant professionnel / numéro d’inscription à l’Ordre des
          médecins :{" "}
          <span className="font-medium text-navy">
            [À COMPLÉTER PAR LE CABINET]
          </span>
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">Hébergement</h2>
        <p className="mt-3">
          Hébergeur :{" "}
          <span className="font-medium text-navy">
            [À COMPLÉTER — nom, adresse et contact de l’hébergeur]
          </span>
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">
          Propriété intellectuelle
        </h2>
        <p className="mt-3">
          L’ensemble des contenus présents sur {site.domain} (textes,
          photographies, éléments graphiques) est protégé. Toute reproduction
          non autorisée est interdite.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">Responsabilité</h2>
        <p className="mt-3">
          Les informations diffusées sur ce site ont un caractère général et
          informatif. Elles ne constituent pas un avis médical personnalisé et
          ne sauraient engager la responsabilité du cabinet en dehors d’une
          consultation.
        </p>
      </section>
    </LegalLayout>
  );
}
