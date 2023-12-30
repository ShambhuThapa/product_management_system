
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/index.css'
const inter = Inter({ subsets: ['latin'] , 
weight: ['400', '600','700','800'],
 display: 'swap'})
export const metadata: Metadata = {
  title: 'Product Management',
  description: 'Product management application',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    return (
     <>
      <html lang="en">
        <body className={inter.className}>
          {children}
        </body>
  
      </html>
      </>
    )
 
}

