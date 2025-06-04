import { Geist, Geist_Mono } from 'next/font/google';

import type { Metadata } from 'next';

import { CopyButtonProvider } from '@/app/provider';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { SideBar } from '@/components/Sidebar';
import { logger } from '@/utils/logger';

import './globals.css';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Programming Notes',
  description: 'Private Notes for Programming',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  logger.info('Rendering Root Layout');
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <main className="w-full h-dvh overflow-hidden">
          <header className="h-[5%] z-50">
            <Header />
          </header>
          <div className="h-[92.5%] min-h-[92.5%] z-0 overflow-y-scroll">
            <div className="flex h-full">
              <div className="min-w-9 w-[5.0%] overflow-x-hidden lg:w-[10.0%] h-full border-r-2">
                <SideBar />
              </div>
              <main className="w-[90%] h-full mx-4">
                <CopyButtonProvider>{children}</CopyButtonProvider>
              </main>
            </div>
          </div>
          <footer className="h-[2.5%] z-50">
            <Footer />
          </footer>
        </main>
      </body>
    </html>
  );
}
