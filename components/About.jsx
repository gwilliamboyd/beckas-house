import styles from '@/styles/about.module.css'
import { Bodoni_Moda } from 'next/font/google'

const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
})

const About = () => {
  return (
    <div className={`${bodoni_moda.className} ${styles.aboutMaster}`}>
      <h1 className={styles.aboutHeading}>About Becka's House</h1>
    </div>
  )
}

export default About
