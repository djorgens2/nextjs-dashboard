import './global.css';
import { inter } from './fonts';
import localFont from 'next/font/local';

const quezon = localFont({ src: './fonts/Quezon.ttf'})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}> */}
      {/* <body className={`${quezon.className} antialiased`}> */}
      <body className={quezon.className}>
        {children}
      </body>
      
    </html>
  );
}