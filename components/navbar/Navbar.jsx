import styles from '../../styles/navbar.module.css'
import NavlinkMain from './nav-links/NavlinkMain'

const Navbar = () => {
  return (
    <nav className={`${styles.master}`}>
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
    </nav>
  )
}

export default Navbar
