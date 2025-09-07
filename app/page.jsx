import About from '@/components/About'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.pageMaster}>
      <Hero />
      <About />
      <FAQ />
    </main>
  )
}
