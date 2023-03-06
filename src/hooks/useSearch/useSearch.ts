import { useCallback, useState } from 'react';
import { useRecoilState } from 'recoil';

import { GITHUB_SEARCH_USERS_URL } from '@/consts';
import { searchQueryAtom, searchResultsAtom } from '@/state/atoms';

export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [searchResults, setSearchResults] = useRecoilState(searchResultsAtom);
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryAtom);

  const onSearch = useCallback(
    async (searchString: string) => {
      try {
        setIsLoading(true);
        setSearchQuery(searchString);
        const response = await fetch(`${GITHUB_SEARCH_USERS_URL}?q=${searchString}`);
        const data = await response.json();
        setSearchResults(data.items);
      } catch (err) {
        setError('Failed to fetch users list. Please try again.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    },
    [setSearchQuery, setSearchResults],
  );

  return {
    isLoading,
    onSearch,
    searchResults,
    searchQuery,
    error,
  };
};
