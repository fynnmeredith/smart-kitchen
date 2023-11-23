import Link from 'next/link';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Smart Kitchen',
  description: 'Made in Manchester',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const header = (
    <header className="justify-center flex text-white bg-blue-950 p-6 rounded-sm">
      <div className="flex flex-col">
        <Link href="/" className="text-center text-white no-underline">
          <h1 className="text-center text-white no-underline">The Smart Kitchen</h1>
        </Link>
        <p className="text-white text-center mt-4">🥝 Elevate your kitchen</p>
      </div>
    </header>
  );

  const footer = (
    <footer className="justify-center flex w-full text-blue-900 mt-10">
      <div className="">
        <p className="text-blue-900">Made in Manchester🥝</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto  max-w-2xl px-6 flex flex-col min-h-screen">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
