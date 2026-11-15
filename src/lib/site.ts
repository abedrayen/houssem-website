export const site = {
  name: "Dr. Houssem Barhoumi",
  title: "Pédiatre",
  fullTitle: "Dr. Houssem Barhoumi, Pédiatre",
  city: "Sousse",
  country: "Tunisie",
  domain: "https://houssembarhoumi.tn",
  email: null as string | null,
  phoneDisplay: "92 432 703",
  phoneHref: "tel:+21692432703",
  phoneInternational: "+216 92 432 703",
  whatsappNumber: "21692432703",
  whatsappMessage:
    "Bonjour Docteur, je souhaite obtenir un rendez-vous pour mon enfant. Pourriez-vous m'indiquer vos disponibilités ?",
  address: {
    line1: "3ème étage, Immeuble Shili",
    line2: "(en face de Baghdad)",
    street: "4023 Rue Ibn Charaf",
    city: "Sousse",
    postalCode: "4023",
    country: "Tunisie",
    full: "3ème étage, Immeuble Shili (en face de Baghdad), 4023 Rue Ibn Charaf, Sousse",
  },
  hours: {
    label: "Lundi – Samedi, 08:00 – 18:00",
    days: "Lundi – Samedi",
    time: "08:00 – 18:00",
    schema: [
      {
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  },
  portrait: {
    src: "/images/dr-houssem-barhoumi.png",
    alt: "Dr Houssem Barhoumi, pédiatre à Sousse",
    width: 504,
    height: 495,
  },
  maps: {
    query: "Immeuble Shili Rue Ibn Charaf Sousse 4023",
    embedUrl:
      "https://www.google.com/maps?q=Immeuble+Shili+Rue+Ibn+Charaf+Sousse+4023&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Immeuble+Shili+Rue+Ibn+Charaf+Sousse+4023",
  },
} as const;

export function whatsappUrl(message = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/#accueil", label: "Accueil" },
  { href: "/#cabinet", label: "Le Cabinet" },
  { href: "/#suivi", label: "Suivi Pédiatrique" },
  { href: "/#conseils", label: "Conseils aux Parents" },
  { href: "/#contact", label: "Contact" },
] as const;

export const services = [
  {
    title: "Consultations pédiatriques",
    description:
      "Évaluation de la santé de votre enfant, écoute des symptômes et orientation claire pour la suite du suivi.",
  },
  {
    title: "Suivi de croissance",
    description:
      "Surveillance du développement staturo-pondéral et des jalons adaptés à l’âge de l’enfant.",
  },
  {
    title: "Suivi du nourrisson",
    description:
      "Accompagnement des premiers mois : examens de contrôle, conseils et réponses aux questions des parents.",
  },
  {
    title: "Vaccination et suivi vaccinal",
    description:
      "Mise à jour du calendrier vaccinal et explications pour vous aider à comprendre chaque étape.",
  },
  {
    title: "Conseils en nutrition infantile",
    description:
      "Orientation sur l’alimentation du nourrisson et de l’enfant, selon les besoins individuels.",
  },
] as const;

export const whyPoints = [
  {
    title: "Écoute et disponibilité",
    description:
      "Les parents sont entendus sans précipitation, avec des réponses concrètes à leurs questions.",
  },
  {
    title: "Suivi personnalisé",
    description:
      "Le parcours de chaque enfant est adapté à son âge, son rythme et son histoire.",
  },
  {
    title: "Explications claires",
    description:
      "Les décisions de santé sont présentées simplement, pour agir avec sérénité.",
  },
  {
    title: "Bien-être et développement",
    description:
      "Une attention portée autant à la santé physique qu’au développement global de l’enfant.",
  },
] as const;

export const adviceArticles = [
  {
    title: "Suivi de la croissance de l’enfant",
    excerpt:
      "Pourquoi les courbes de croissance comptent, et à quels moments un contrôle pédiatrique est utile.",
    date: "2026-11-01",
    dateLabel: "1 novembre 2026",
  },
  {
    title: "Calendrier vaccinal : points de repère",
    excerpt:
      "Des bases pour comprendre le suivi vaccinal et préparer les questions à poser en consultation.",
    date: "2026-11-01",
    dateLabel: "1 novembre 2026",
  },
  {
    title: "Alimentation du nourrisson",
    excerpt:
      "Repères généraux sur l’alimentation des premiers mois, à adapter avec votre pédiatre.",
    date: "2026-11-01",
    dateLabel: "1 novembre 2026",
  },
  {
    title: "Conseils pour les jeunes parents",
    excerpt:
      "Quelques pistes pour mieux organiser le suivi médical et se sentir plus à l’aise au cabinet.",
    date: "2026-11-01",
    dateLabel: "1 novembre 2026",
  },
] as const;
