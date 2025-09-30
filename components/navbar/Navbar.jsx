import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
import CTAButton from '../CTAButton'
import SocialIcon from '../SocialIcon'
import NavlinkContact from './nav-links/NavlinkContact'
import NavlinkMain from './nav-links/NavlinkMain'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className={`${styles.master}`}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image
              className={styles.logoImage}
              src={'/beckas-house-logo.png'}
              width={260}
              height={120}
              alt="Becka's House logo"
            />
          </Link>
          <div className={styles.mainContainer}>
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
        </div>
        <CTAButton
          buttonText={'Donate Here'}
          url={'https://give.donationpay.org/charitysmith/bjbmemorialfund/'}
          fontSize={'20px'}
        />
        {/* <div className={styles.contactContainer}>
          <div className={styles.contactLeft}>
            <NavlinkContact
              styles={styles}
              linkText={'214-952-8865'}
              url={'tel:2149528865'}
            />
            <NavlinkContact
              styles={styles}
              linkText={'contact@beckashouse.com'}
              url={'mailto:contact@beckashouse.com'}
            />
          </div>
          <div className={styles.socials}>
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
        </div> */}
      </div>
    </nav>
  )
}

export default Navbar
