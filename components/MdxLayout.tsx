'use client';
export default function MdxLayout({ children }: { children: React.ReactNode }) {
  const classStr = ['px-4'].join(' ');
  // Create any shared layout or styles here
  return <article className={classStr}>{children}</article>;
}
