import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://prasath-balasubramani.netlify.app'),
  title: 'Prasath Balasubramani - Software Engineer 2',
  description: 'Software Engineer 2 with 3 years of experience building scalable web applications. Currently at Refyne India.',
  keywords: ['Software Engineer', 'Full-Stack Developer', 'React', 'Node.js', 'TypeScript'],
  authors: [{ name: 'Prasath Balasubramani' }],
  openGraph: {
    title: 'Prasath Balasubramani - Software Engineer 2',
    description: 'Software Engineer 2 with 3 years of experience building scalable web applications.',
    type: 'website',
    url: 'https://prasath-balasubramani.netlify.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prasath Balasubramani - Software Engineer 2',
    description: 'Software Engineer 2 with 3 years of experience building scalable web applications.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-x-hidden`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
