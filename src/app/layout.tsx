import './globals.css';
import { Limelight } from 'next/font/google';

const limelight = Limelight({ subsets: ['latin'], weight: '400' });

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="en" className={limelight.className}>
      <body>
        {children}
      </body>
    </html>
  );
}