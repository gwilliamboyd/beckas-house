import styles from '@/styles/info.module.css'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const InfoQuestion = ({ heading, paragraph }) => {
  return (
    <div className={`${open_sans.className} ${styles.infoQuestion}`}>
      <h4 className={styles.infoQuestionHeading}>{heading}</h4>
      <p className={styles.infoQuestionParagraph}>{paragraph}</p>
    </div>
  )
}

export default InfoQuestion
