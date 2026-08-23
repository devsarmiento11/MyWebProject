'use client';

import Icon from '@/components/atoms/Icon';

export default function SearchForm({ query, onQueryChange }) {
  return (
    <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
      <label htmlFor="heritage-search">Search heritage sites</label>
      <div className="search-form__control">
        <Icon name="search" />
        <input
          id="heritage-search"
          name="q"
          type="search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Try “Manaoag”"
          autoComplete="off"
        />
      </div>
    </form>
  );
}
