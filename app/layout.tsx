import './styles/globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'OpenEarth Academy',
  description: 'Code for the Environment'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
