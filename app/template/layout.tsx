import Link from "next/link";

export default function Layout({ children }: any) {
  console.log('Layout render');

  return (
    <div>
      <h1>Layout</h1>
      <Link href={'/template/page-a'}>page a</Link>
      <Link href={'/template/page-b'}>page b</Link>
      {children}
    </div>
  )
}
