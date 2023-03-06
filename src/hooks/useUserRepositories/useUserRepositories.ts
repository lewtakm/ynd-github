import { useState } from 'react';

interface UseUserRepositoriesProps {
  login: string;
}
interface Repository {
  name: string;
  description: string;
  stargazers_count: number;
  html_url: string;
}

export const useUserRepositories = ({ login }: UseUserRepositoriesProps) => {
  const [respositories, setRepositories] = useState<Array<Repository>>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserRepositories = async () => {
    try {
      if (respositories.length) {
        return null;
      }
      setIsLoading(true);
      const response = await fetch(`https://api.github.com/users/${login}/repos`);
      const repositoriesData = await response.json();
      setRepositories(repositoriesData);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    respositories,
    fetchUserRepositories,
  };
};
