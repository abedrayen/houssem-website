import { site, whatsappUrl } from "@/lib/site";

type ContactCtasProps = {
  showDirections?: boolean;
  className?: string;
};

export function ContactCtas({
  showDirections = false,
  className = "",
}: ContactCtasProps) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a href={site.phoneHref} className="btn btn-primary">
        Appeler le cabinet
      </a>
      <a
        href={whatsappUrl()}
        className="btn btn-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
      {showDirections ? (
        <a
          href={site.maps.directionsUrl}
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir l’itinéraire
        </a>
      ) : null}
    </div>
  );
}
