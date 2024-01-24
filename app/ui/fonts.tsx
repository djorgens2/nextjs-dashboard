import { Inter, Lusitana } from 'next/font/google'
import localFont from 'next/font/local'

export const quezon = localFont({ src: './fonts/Quezon.ttf'})
export const inter = Inter({ subsets: ['latin'] })
export const lusitana = Lusitana({ weight: ['400','700'], subsets: ['latin']})
