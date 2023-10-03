import Link from 'next/link'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Welcome to Climate Connect</h1>
      <Link href="/proposals">Proposal</Link>
      <Link href="/challenges">Challenge</Link>
    </main>
  )
}
