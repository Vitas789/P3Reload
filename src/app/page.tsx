import Image from 'next/image'
import styles from './page.module.css'
import Lead from '@/components/Lead/Lead'

export default function Home() {
  return (
    <main className={styles.main}>
      <Lead/>
    </main>
  )
}
