import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import "../globals.css"
import Image from 'next/image'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gon Silva\'s Blog',
  description: 'Generated by create next app',
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className='text-center bg-stone-600 p-8 my-6 rounded-md'>
        <Link href='/'>
          <h1 className="text-3xl text-stone-200 font-bold"  >{`Gon Silva's Blog 🧠`}</h1>
        </Link>
        <p className='text-stone-300'>✌️ welcome to my tech blog 💻</p>
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className='border-t border-stone-500 mt-6 py-6 text-center text-stone-400'>
        <br />
        <p>Developed by Gon</p>
      </div>
    </footer>
  )


  return (
    <div className="mx-auto max-w-2xl px-6">
      {header}
      {children}
      {footer}
    </div>
  )
}
