'use-client'
import './globals.css'
import { Inter } from 'next/font/google'
import ReactDOM from 'react-dom'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  // @ts-ignore
  link: ReactDOM.preload({href: './globals.css', options: { as: 'stylesheet' }}),
  title: 'shop shoes',
  description: 'shop shoes',
}
// console.log(metadata.link)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es-MX">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
