import { ReactNode, useEffect, useState } from 'react';

export default function ClientOnly({ children }: { children: ReactNode }) {
  const isClient = typeof window !== 'undefined';

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isClient || !mounted) return null;

  return <>{children}</>;
}
