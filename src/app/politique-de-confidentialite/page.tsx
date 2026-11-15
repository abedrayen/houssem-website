import type { Metadata } from "next";
import { LegalLayout } from "@/components/LegalLayout";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: `Politique de confidentialité du site du ${site.fullTitle}.`,
  alternates: {
    canonical: "/politique-de-confidentialite",
  },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <LegalLayout title="Politique de confidentialité">
      <section>
        <h2 className="font-display text-2xl text-navy">Principes</h2>
        <p className="mt-3">
          Ce site est une vitrine informative. Il ne collecte pas de dossier
          médical et ne propose pas de formulaire demandant des informations de
          santé.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">
          Prise de contact
        </h2>
        <p className="mt-3">
          Lorsque vous contactez le cabinet par téléphone ({site.phoneInternational})
          ou via WhatsApp, les échanges relèvent de ces canaux externes. Merci de
          ne pas transmettre d’informations médicales sensibles par message
          avant votre consultation.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">
          Données techniques
        </h2>
        <p className="mt-3">
          L’hébergeur du site peut enregistrer des journaux techniques
          (adresse IP, date et heure de visite, pages consultées) nécessaires au
          fonctionnement et à la sécurité du service.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">Cookies</h2>
        <p className="mt-3">
          Le site n’utilise pas de cookies publicitaires. Seuls des cookies
          techniques éventuels liés à l’hébergement ou à la mesure d’audience
          peuvent être mis en place ultérieurement, avec information claire si
          nécessaire.
        </p>
      </section>

      <section>
        <h2 className="font-display text-2xl text-navy">Vos droits</h2>
        <p className="mt-3">
          Pour toute question relative à vos données personnelles, contactez le
          cabinet au {site.phoneInternational} ou à l’adresse du cabinet :{" "}
          {site.address.full}.
        </p>
      </section>
    </LegalLayout>
  );
}
