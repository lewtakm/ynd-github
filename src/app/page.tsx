import { SearchForm, SearchResults } from '@/components';

const Home = () => (
  <div>
    <h1 className="mb-6 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-black">
      <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
        GitHub{' '}
      </span>
      Repositories Explorer
    </h1>
    <SearchForm />
    <SearchResults />
  </div>
);

export default Home;
