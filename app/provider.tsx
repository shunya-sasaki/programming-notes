'use client';

import { useEffect } from 'react';

import { registerCopyButton } from '@rehype-pretty/transformers';

export const CopyButtonProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  useEffect(() => {
    registerCopyButton();
    const observer = new MutationObserver(() => {
      registerCopyButton();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return <>{children}</>;
};
