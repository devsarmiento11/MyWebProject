import { notFound } from 'next/navigation';
import Button from '@/components/atoms/Button';
import SiteImage from '@/components/atoms/SiteImage';
import { getSiteBySlug, heritageSites } from '@/data/heritage';

export function generateStaticParams() {
  return heritageSites.map((site) => ({ slug: site.slug }));
}

export function generateMetadata({ params }) {
  const site = getSiteBySlug(params.slug);
  return site ? { title: site.shortName, description: site.summary } : {};
}

export default function HeritageDetailPage({ params }) {
  const site = getSiteBySlug(params.slug);
  if (!site) notFound();

  const number = String(heritageSites.findIndex((item) => item.slug === site.slug) + 1).padStart(2, '0');

  return (
    <main id="main-content" className="place-page">
      <section className="place-hero">
        <div className="place-hero__intro">
          <Button href="/#heritage-sites" variant="text">← Back to places</Button>
          <div className="place-badge">Stop {number}</div>
          <p className="eyebrow">{site.category}</p>
          <h1>{site.name}</h1>
          <p className="place-hero__location">{site.location}</p>
          <p className="place-hero__summary">{site.summary}</p>
        </div>
        <div className="place-hero__photo">
          <SiteImage src={site.image} alt={site.imageAlt} priority sizes="(min-width: 900px) 58vw, 100vw" />
          <p className="photo-credit">{site.photoCredit}</p>
        </div>
      </section>

      <section className="guide-panel">
        <div className="guide-panel__heading">
          <span>FIELD NOTE</span>
          <h2>About this place</h2>
        </div>
        <div className="guide-panel__story"><p>{site.story}</p></div>
        <ul className="guide-panel__facts" aria-label="Highlights">
          {site.highlights.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </main>
  );
}
