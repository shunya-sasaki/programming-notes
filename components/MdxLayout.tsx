'use client';
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const classStr = ['px-4', 'pb-4'].join(' ');
  return <article className={classStr}>{children}</article>;
}
