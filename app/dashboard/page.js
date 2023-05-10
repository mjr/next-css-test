import Link from 'next/link'

export default function Page() {
  return <h1>Dashboard <Link href="/blog/">Blog</Link> | <Link href="/">Home</Link></h1>
}
