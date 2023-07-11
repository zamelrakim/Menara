import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './partials/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Menara',
  description: 'If A Menara Falls In A Forest...',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col m-auto min-h-screen bg-zinc-900"}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
