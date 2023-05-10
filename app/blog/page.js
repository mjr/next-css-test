import Link from 'next/link'

export default function Page() {
  return <h1>Blog <Link href="/dashboard/">Dashboard</Link> | <Link href="/">Home</Link></h1>
}
