import './global.css'
import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

const quezon = localFont({ src: './fonts/Quezon.ttf'})
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} antialiased`}> */}
      <body className={inter.className}>
      {/* <body className={`${quezon.className} antialiased`}> */}
      {/* <body className={quezon.className}> */}
        {children}
      </body>
      
    </html>
  );
}