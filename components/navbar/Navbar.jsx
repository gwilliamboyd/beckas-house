import styles from '../../styles/navbar.module.css'
import CTAButton from '../CTAButton'
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
    </nav>
  )
}

export default Navbar
