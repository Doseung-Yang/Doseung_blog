import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="h-[2000px]">
      <h3> 안녕 블로그</h3>
    </main>
  )
}
