import { site } from "@/lib/site";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Physician",
        "@id": `${site.domain}/#physician`,
        name: site.fullTitle,
        url: site.domain,
        image: `${site.domain}${site.portrait.src}`,
        telephone: site.phoneInternational,
        medicalSpecialty: "Pediatric",
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.street}`,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: "TN",
        },
        worksFor: { "@id": `${site.domain}/#medicalbusiness` },
      },
      {
        "@type": "MedicalBusiness",
        "@id": `${site.domain}/#medicalbusiness`,
        name: `Cabinet de pédiatrie — ${site.name}`,
        url: site.domain,
        image: `${site.domain}${site.portrait.src}`,
        telephone: site.phoneInternational,
        address: {
          "@type": "PostalAddress",
          streetAddress: `${site.address.line1}, ${site.address.street}`,
          addressLocality: site.address.city,
          postalCode: site.address.postalCode,
          addressCountry: "TN",
        },
        openingHoursSpecification: site.hours.schema.map((slot) => ({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: slot.dayOfWeek,
          opens: slot.opens,
          closes: slot.closes,
        })),
        priceRange: "$$",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
