import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Stately Hyland Apiaries',
    template: '%s | Stately Hyland Apiaries',
  },
  description: 'Local honey and beekeeping updates from Stately Hyland Apiaries in Northeastern New Jersey.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}