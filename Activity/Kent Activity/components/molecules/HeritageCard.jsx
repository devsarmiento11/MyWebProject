import Button from '@/components/atoms/Button';
import Icon from '@/components/atoms/Icon';
import SiteImage from '@/components/atoms/SiteImage';

export default function HeritageCard({ site, index = 0 }) {
  const number = String(index + 1).padStart(2, '0');

  return (
    <article className={`place-card place-card--${index + 1}`}>
      <div className="place-card__image">
        <SiteImage src={site.image} alt={site.imageAlt} sizes="(min-width: 900px) 46vw, 92vw" />
      </div>
      <div className="place-card__content">
        <div className="place-card__topline">
          <span className="place-number">{number}</span>
          <span>{site.category}</span>
        </div>
        <h3>{site.shortName}</h3>
        <p className="place-location"><Icon name="location" /> {site.location}</p>
        <p>{site.summary}</p>
        <Button href={`/sites/${site.slug}/`} variant="text" aria-label={`Explore ${site.shortName}`}>
          Open guide <Icon name="arrow" />
        </Button>
      </div>
    </article>
  );
}
