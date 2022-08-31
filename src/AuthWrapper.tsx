import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { useStore } from '~/store';

/**
 * Ensures the children (the page) is authenticated.
 */
export default function AuthWrapper({ children }: { children: React.ReactNode }) {
  const store = useStore();

  const router = useRouter();

  const { user, loading } = store;

  const isConfirmed = !!user?.token;

  const isNotAuthed = !loading && (!user || !isConfirmed);

  useEffect(() => {
    if (isNotAuthed) {
      router.push('/');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isNotAuthed]);

  if (loading || isNotAuthed) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}
