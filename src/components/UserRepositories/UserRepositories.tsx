'use client';

import { useState } from 'react';

import { useUserRepositories } from '@/hooks';

import { UserRepository } from '../UserRepository';

interface UserRepositoriesProps {
  login: string;
}

export const UserRepositories = ({ login }: UserRepositoriesProps) => {
  const { respositories, isLoading, fetchUserRepositories } = useUserRepositories({ login });
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    fetchUserRepositories();
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <div className="rounded-t-lg border border-neutral-200 bg-white dark:border-neutral-600 dark:bg-neutral-800">
        <h2 className="mb-0" id="headingOne">
          <button
            className="group relative flex w-full items-center rounded-t-[15px] border-0 bg-white py-4 px-5 text-left text-base text-neutral-800 transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:bg-white [&:not([data-te-collapse-collapsed])]:text-primary [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:text-primary-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
            onClick={handleExpand}
            type="button"
          >
            {login}
            <span
              className={`ml-auto h-5 w-5 shrink-0 ${
                isExpanded ? 'rotate-[-180deg]' : ''
              }  fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white`}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </h2>
        <div
          aria-labelledby="headingOne"
          className={`overflow-y-auto transition-max-height duration-300 ease-in-out ${
            isExpanded ? 'max-h-96' : 'max-h-0'
          }`}
        >
          <div className="p-4 grid gap-4">
            {isLoading ? (
              <p className="p-4">Fetching..</p>
            ) : (
              respositories.map(({ name, description, stargazers_count, html_url }) => (
                <UserRepository
                  description={description}
                  key={name}
                  name={name}
                  stars={stargazers_count}
                  url={html_url}
                />
              ))
            )}
            {!respositories.length && !isLoading ? (
              <p className="p-4">User {login} has no public repositories.</p>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
