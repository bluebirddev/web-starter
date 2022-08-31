import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import create from 'zustand';
import ClientOnly from '~/ClientOnly';
import Button from '~/components/Button';
import { useStore } from '~/store';
import { useFindPetsByStatus } from '../api/endpoints';

type CountStore = {
  count: number;
  inc: () => void;
};
const countStore = create<CountStore>((set) => ({
  count: 0,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

const Home: NextPage = () => {
  const { isLoading, data } = useFindPetsByStatus({
    status: ['available', 'pending'],
  });

  const { count, inc } = countStore();
  const { user, setUser, clearUser } = useStore();

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
          <div className="my-2">
            <ClientOnly>
              {user ? (
                <div className="space-x-2">
                  <span>You are logged in</span>
                  <Link href="/authed">
                    <a className="text-blue-700">Go to authorized page</a>
                  </Link>
                  <Button onClick={() => clearUser()}>Logout</Button>
                </div>
              ) : (
                <div className="space-x-2">
                  <span>You are not logged in</span>
                  <Button
                    onClick={() =>
                      setUser({
                        token: '123123',
                      })
                    }
                  >
                    Login
                  </Button>
                </div>
              )}
            </ClientOnly>
          </div>
          <hr />
          <div className="my-2">
            <h2>Result of client-side query:</h2>
            {isLoading && <div>Loading...</div>}
            {data && (
              <div className="p-2 bg-gray-200 text-xs h-64 overflow-auto">
                {JSON.stringify(data, null, 2)}
              </div>
            )}
          </div>
          <hr />
          <div className="my-2">
            Local count:
            <span className="mx-2 font-bold">{count}</span>
            <button type="button" className="border border-black" onClick={inc}>
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
