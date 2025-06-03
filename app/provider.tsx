// app/_components/CopyButtonProvider.tsx
'use client';

import { useEffect } from 'react';

import { registerCopyButton } from '@rehype-pretty/transformers';

// app/_components/CopyButtonProvider.tsx

export function CopyButtonProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    // attach once; cleanup fn removes it on unmount
    return registerCopyButton();
  }, []);

  return <>{children}</>;
}
