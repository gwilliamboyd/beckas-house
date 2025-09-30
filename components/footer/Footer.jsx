import styles from '@/styles/footer.module.css'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'
import NavlinkMain from '../navbar/nav-links/NavlinkMain'
import SocialIcon from '../SocialIcon'
import CTAButton from '../CTAButton'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerMaster}>
        <div className={styles.footerWrapper}>
          <div className={`${open_sans.className} ${styles.contactWrapper}`}>
            <Image
              src={'/beckas-house-logo.png'}
              width={241}
              height={111}
              alt="Becka's House Logo"
            />
            <a
              className={styles.contactText}
              href='mailto:contact@beckashouse.com'>
              contact@beckashouse.com
            </a>
            <a
              className={styles.contactText}
              href='tel:214-952-8865'>
              214-952-8865
            </a>
          </div>
          <div className={`${bodoni_moda.className} ${styles.linksWrapper}`}>
            <NavlinkMain
              styles={styles}
              url={'/gallery'}
              linkText={'Gallery'}
            />
            <NavlinkMain
              styles={styles}
              url={'/testimonials'}
              linkText={'Testimonials'}
            />
          </div>
          <div className={styles.socialsWrapper}>
            <SocialIcon
              styles={styles}
              url={'https://www.facebook.com'}
              fillColor={'#000000'}
              site={'facebook'}
              dimensions={60}
            />
            <SocialIcon
              styles={styles}
              url={'https://www.instagram.com'}
              fillColor={'#000000'}
              site={'instagram'}
              dimensions={60}
            />
          </div>
        </div>
      </div>
      <div className={`${open_sans.className} ${styles.footerSocketMaster}`}>
        <div className={styles.footerSocketWrapper}>
          <p className={styles.footerSocketText}>
            © 2025 Becka’s House LLC | All Rights Reserved
          </p>
          <p className={styles.footerSocketText}>
            Site by Henry Winget and G William Boyd
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
