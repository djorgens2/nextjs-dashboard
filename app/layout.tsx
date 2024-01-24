import './global.css'
import { inter } from '@/app/ui/fonts'

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