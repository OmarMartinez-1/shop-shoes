import './globals.css'
import { poppins } from './fonts'



export const metadata = {
  
  title: 'shop shoes',
  description: 'shop shoes',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

    

    <>
    
    <html lang="es-MX">
      <body className={poppins.className}>{children}</body>
    </html>
    
    </>
  )
}
