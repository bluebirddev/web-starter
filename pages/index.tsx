import type { NextPage } from 'next';
import Head from 'next/head';
import { useQuery } from 'react-query';

const Home: NextPage = () => {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://api.github.com/repos/tannerlinsley/react-query').then((res) => res.json())
  );

  console.log({ isLoading, error, data });
  return (
    <>
      <Head>
        <title>Web Starter</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen">
        <main>
          <h1>Web Starter</h1>
          {data && <div className="p-2 bg-gray-200 text-xs">{JSON.stringify(data, null, 2)}</div>}
        </main>

        <footer className="absolute inset-x-0 bottom-0">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span>
              <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
