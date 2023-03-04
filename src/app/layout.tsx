import { ReactNode } from 'react';
import './globals.css';

export const metadata = {
  title: 'YND GitHub Respositories Explorer',
  description: 'App generated with create-next-app with tailwind',
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
