import { ReactNode } from 'react';

import { RecoilProvider } from '@/providers';
import './globals.css';

export const metadata = {
  title: 'Github Repositories Explorer',
  description: 'App generated with create-next-app with tailwind',
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className="min-h-screen min-w-screen p-4 grid place-content-center overflow-y-auto">
      <main className="rounded-lg overflow-hidden shadow-lg bg-slate-50 p-8">
        <RecoilProvider>{children}</RecoilProvider>
      </main>
    </body>
  </html>
);

export default RootLayout;
