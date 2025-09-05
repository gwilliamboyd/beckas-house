import styles from '../../styles/navbar.module.css'
import CTAButton from '../CTAButton'
import SocialIcon from '../SocialIcon'
import NavlinkContact from './nav-links/NavlinkContact'
import NavlinkMain from './nav-links/NavlinkMain'

const Navbar = () => {
  return (
    <nav className={`${styles.master}`}>
      <div className={styles.mainContainer}>
        <NavlinkMain
          styles={styles}
          linkText={'About Us'}
          url={'#about-us'}
        />
        <NavlinkMain
          styles={styles}
          linkText={'FAQ'}
          url={'#faq'}
        />
        <CTAButton
          buttonText={'Donate'}
          url={'#'}
        />
      </div>
      <div className={styles.contactContainer}>
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
            url={'https://www.instagram.com'}
            fillColor={'#000000'}
            site={'instagram'}
          />
          <SocialIcon
            styles={styles}
            url={'https://www.instagram.com'}
            fillColor={'#000000'}
            site={'instagram'}
          />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
