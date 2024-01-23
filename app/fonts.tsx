import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
 
export const inter = Inter({ subsets: ['latin'] });
export const quezon = localFont({
    src: [
        {
            path: './fonts/Quezon.ttf',
            weight: '400'
        },
    ],
    variable: '--font-quezon'
})