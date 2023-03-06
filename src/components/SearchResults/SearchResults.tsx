'use client';

import { useSearch } from '@/hooks';

import { UserRepositories } from '../UserRepositories';

export const SearchResults = () => {
  const { searchQuery, searchResults } = useSearch();

  if (!searchQuery && !searchResults.length) {
    return null;
  }

  return (
    <div className="mt-6">
      <div className="grid gap-4">
        <p className="text-lg font-normal text-gray-900 lg:text-xl dark:text-gray-400">
          Showing results for &quot;<span className="text-gray-900 font-bold">{searchQuery}</span>
          &quot;
        </p>
        {searchResults.map(({ login }) => (
          <UserRepositories key={login} login={login} />
        ))}
      </div>
    </div>
  );
};
