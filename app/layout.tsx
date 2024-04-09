import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import {Providers} from "./providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'thewatchspot',
  description: 'Practice work',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <div className='mytheme text-foreground bg-background w-[1280px]'>
          <Providers>
            <Header />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
