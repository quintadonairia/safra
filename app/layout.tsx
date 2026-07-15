import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Safra',
  description: 'Safra Restaurante',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
