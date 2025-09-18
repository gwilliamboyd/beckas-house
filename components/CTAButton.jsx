import { Open_Sans } from 'next/font/google'
import styles from '@/styles/page.module.css'

const open_sans = Open_Sans({ subsets: ['latin'], weight: ['400', '700'] })

const CTAButton = ({ buttonText, url, fontSize }) => {
  return (
    <a
      className={`${open_sans.className} ${styles.ctaButton}`}
      href={url}
      style={{ fontSize: fontSize }}
      target='_blank'>
      {buttonText}
    </a>
  )
}

export default CTAButton
