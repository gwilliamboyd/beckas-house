'use client'
import Image from 'next/image'
import styles from '@/styles/faq.module.css'
import { Open_Sans } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'
import useIsMobile from '@/hooks/useIsMobile'

// Font imports
const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Question = ({
  imgSrc,
  headingA,
  headingHighlight,
  headingB,
  paragraph,
  altText,
}) => {
  const isMobile = useIsMobile(1150)

  return (
    <div className={styles.questionContainer}>
      <div className={styles.faqImageWrapper}>
        <Image
          src={imgSrc}
          width={isMobile ? 330 : 558}
          height={isMobile ? 161 : 272}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
          alt={'Beckas House FAQ image'}
        />
      </div>
      <div className={`${bodoni_moda.className} ${styles.faqText}`}>
        <h2 className={styles.faqHeading}>
          {headingA}
          <span className={styles.headingHighlight}>{headingHighlight}</span>
          {headingB}
        </h2>
        <p className={`${open_sans.className} ${styles.faqParagraph}`}>
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default Question
