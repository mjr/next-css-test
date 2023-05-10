import './root.css'

import Link from 'next/link'

export default function Page() {
  return <h1>Hello, Next.js! <Link href="/dashboard/">Dashboard</Link> | <Link href="/blog/">Blog</Link></h1>
}
