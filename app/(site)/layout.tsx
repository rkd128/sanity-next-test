import '../globals.css'
import Link from "next/link"
import { getPages } from '@/sanity/sanity-utils';
import Image from 'next/image'


export const metadata = {
  title: 'Amazing, Awesome, Abysmal',
  description: 'Generated by Next + Sanity',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pages = await getPages();

  return (
    <html lang="en">
      <body>
        {/* NAV */}
        <nav className="fixed w-screen max-lg:bottom-0 flex py-3 lg:px-10 px-5 z-50 max-lg:bg-white/65 max-lg:backdrop-blur-md  max-lg:backdrop-saturate-200 max-lg:rounded-t-2xl max-lg:shadow-nav">
          <div className='grid grid-cols-3 w-full'>

            <Link href="/" className="max-lg:col-start-2 max-lg:justify-self-center bg-gradient-to-r self-center from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent text-lg font-bold">
              <Image src="/logo.svg" alt="Underexposed Logo" width={178} height={117} className="drop-shadow-2xl max-lg:max-w-24"/>
            </Link>
            
            <button className="col-start-3 justify-self-end" aria-label='Mobile Navigation Button'>
              <span className="bar rounded-full mb-1.5"></span>
              <span className="bar rounded-full mb-1.5"></span>
              <span className="bar rounded-full"></span>
            </button>

          </div>
        </nav>

          {/* <div className="flex items-center gap-5 text-sm text-white ">
            {pages.map((page) => (
              <Link key={page._id} href={`/${page.slug}`} className="hover:underline ">{page.title}</Link>
            ))}
          </div> */}

        <main className="flex flex-col items-center w-screen">{children}</main>
      </body>
    </html>
  )
}
