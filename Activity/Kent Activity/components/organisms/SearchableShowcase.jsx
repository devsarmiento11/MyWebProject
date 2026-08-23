'use client';

import { useMemo, useState } from 'react';
import SearchForm from '@/components/molecules/SearchForm';
import HeritageGrid from '@/components/organisms/HeritageGrid';

export default function SearchableShowcase({ sites }) {
  const [query, setQuery] = useState('');

  const filteredSites = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sites;

    return sites.filter((site) =>
      [site.name, site.location, site.category, site.summary]
        .join(' ')
        .toLowerCase()
        .includes(normalized)
    );
  }, [query, sites]);

  return (
    <>
      <SearchForm query={query} onQueryChange={setQuery} />
      <p className="results-count" aria-live="polite">
        {filteredSites.length} {filteredSites.length === 1 ? 'site' : 'sites'} shown
      </p>
      <HeritageGrid sites={filteredSites} />
    </>
  );
}
