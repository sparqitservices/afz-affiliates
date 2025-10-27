// app/layout.tsx
import type { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'
import InstallBanner from './components/InstallBanner'

export const metadata: Metadata = {
  metadataBase: new URL('https://afz-affiliates.vercel.app'),
  title: {
    default: 'AFZ Affiliates — Discover. Compare. Earn More.',
    template: '%s | AFZ Affiliates'
  },
  description: 'Find the best affiliate programs by category, commission, cookie days, and networks. Discover. Compare. Earn More.',
  applicationName: 'AFZ Affiliates',
  keywords: ['affiliate programs', 'commissions', 'CPA', 'CPL', 'CPS', 'AFZ Affiliates'],
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0052C9' },
    { media: '(prefers-color-scheme: dark)', color: '#212121' },
  ],
  icons: {
    icon: [
      { url: '/icons/icon-192.png', sizes: '192x192' },
      { url: '/icons/icon-512.png', sizes: '512x512' },
    ],
    apple: '/icons/icon-192.png',
  },
  openGraph: {
    title: 'AFZ Affiliates',
    description: 'Discover. Compare. Earn More.',
    url: 'https://afz-affiliates.vercel.app',
    siteName: 'AFZ Affiliates',
    images: [{ url: '/branding/afz-logo-light.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.webmanifest" />
      </head>
      <body>
        <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img src="/branding/afz-logo-light.png" alt="AFZ Affiliates" className="h-8 w-auto" />
            </Link>
            <nav className="flex items-center gap-3">
              <Link href="/programs" className="btn-ghost">Browse Programs</Link>
              <Link href="/submit" className="btn-primary">List Program</Link>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-7xl px-4">
          <InstallBanner />
          {children}
        </div>

        <footer className="mt-16 border-t bg-white">
          <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-gray-600">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <p>© {new Date().getFullYear()} AFZ Affiliates. Discover. Compare. Earn More.</p>
              <div className="flex items-center gap-4">
                <Link href="/privacy" className="hover:underline">Privacy</Link>
                <Link href="/terms" className="hover:underline">Terms</Link>
                <Link href="/contact" className="hover:underline">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}