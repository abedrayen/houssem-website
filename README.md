# Site — Dr. Houssem Barhoumi, Pédiatre

Site vitrine français du cabinet de pédiatrie à Sousse (`houssembarhoumi.tn`).

## Stack

- Next.js (App Router) + TypeScript
- Tailwind CSS v4
- Déploiement recommandé : Vercel (HTTPS)

## Développement

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Données du cabinet

Source unique : [`src/lib/site.ts`](src/lib/site.ts)

| Champ | Valeur |
|-------|--------|
| Adresse | 3ème étage, Immeuble Shili (en face de Baghdad), 4023 Rue Ibn Charaf, Sousse |
| Téléphone / WhatsApp | +216 92 432 703 |
| Horaires | Lundi – Samedi, 08:00 – 18:00 |
| Domaine | https://houssembarhoumi.tn |

## SEO & Google

Après mise en ligne :

1. Pointer le domaine `houssembarhoumi.tn` vers l’hébergeur (DNS A/CNAME).
2. Soumettre `https://houssembarhoumi.tn/sitemap.xml` dans Google Search Console.
3. Vérifier `https://houssembarhoumi.tn/robots.txt`.
4. Créer / revendiquer la fiche Google Business Profile avec le **même** NAP que le site.
5. Remplacer l’URL Maps générique par le lien exact du lieu une fois la fiche confirmée.

## À compléter avant / juste après la mise en production

- [ ] Confirmer la liste exacte des actes / services proposés
- [ ] Ajouter parcours / diplômes vérifiés (actuellement omis)
- [ ] Lien Google Business Profile vérifié
- [ ] URL Maps / coordonnées GPS exactes
- [ ] Numéro d’inscription à l’Ordre des médecins (mentions légales)
- [ ] Coordonnées de l’hébergeur (mentions légales)
- [ ] Portrait plus haute résolution (source actuelle ~504×495 px — limitée sur grands écrans)
- [ ] Photo du cabinet (optionnel)

## Structure

- `/` — page unique (sections Accueil, Cabinet, Suivi, Conseils, Contact)
- `/mentions-legales`
- `/politique-de-confidentialite`

Portrait : `public/images/dr-houssem-barhoumi.png`
