import Link from "next/link"
import styles from '/styles/estilos.css'
import Nav from "@/componentes/Nav"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>
        <Nav />
        {children}
      </body>
    </html>
  )
}
