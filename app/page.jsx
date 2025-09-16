import About from '@/components/About'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/Hero'
import Info from '@/components/Info/Info'
import styles from '@/styles/page.module.css'

export default function Home() {
  return (
    <main className={styles.pageMaster}>
      <Hero />
      <About />
      <FAQ />
      <Info />
    </main>
  )
}
