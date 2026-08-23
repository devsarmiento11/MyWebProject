import HeritageCard from '@/components/molecules/HeritageCard';

export default function HeritageGrid({ sites }) {
  if (!sites.length) return <p className="empty-state">No heritage sites found.</p>;

  return (
    <div className="places-grid">
      {sites.map((site, index) => (
        <HeritageCard key={site.slug} site={site} index={index} />
      ))}
    </div>
  );
}
