import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from 'react-query';
import create from 'zustand';
import clientApi from './client-api';

type CountStore = {
  count: number;
  inc: () => void;
};
const countStore = create<CountStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

const Home: NextPage = () => {
  const { isLoading, data } = useQuery('repoData', () => clientApi.get('/users'));

  const { count, inc } = countStore();

  return (
    <>
      <Head>
        <title>Web Starter</title>
        <meta name="description" content="Bluebird Web Starter" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen p-2">
        <main>
          <h1 className="text-2xl">Web Starter</h1>
          <p className="my-2">
            <Link href="/user/1231">
              <a className="text-blue-700">Go to a dynamic page</a>
            </Link>
          </p>
          <hr />
          <div className="my-2">
            <h2>Result of client-side query:</h2>
            {isLoading && <div>Loading...</div>}
            {data && <div className="p-2 bg-gray-200 text-xs">{JSON.stringify(data, null, 2)}</div>}
          </div>
          <hr />
          <div className="my-2">
            Local count:
            <span className="mx-2 font-bold">{count}</span>
            <button className="border border-black" onClick={inc}>
              ++
            </button>
          </div>
        </main>

        <footer className="absolute inset-x-0 bottom-0 p-2">
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            Powered by{' '}
            <span className="ml-2">
              <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    </>
  );
};

export default Home;
