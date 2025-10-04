import styles from '@/styles/navbar.module.css'
import NavlinkMain from './NavlinkMain'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const MobileMenu = ({ menuOpen, setMenuOpen, mobileMenuHandler }) => {
  return (
    <div className={styles.mobileMenuMaster}>
      <ul className={styles.mobileMenuContainer}>
        <li className={styles.xIcon}>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'About Us'}
            url={'/#about-us'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'FAQ'}
            url={'/#faq'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'Gallery'}
            url={'/gallery'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
        <li className={styles.mobileMenuLink}>
          <NavlinkMain
            styles={styles}
            linkText={'Testimonials'}
            url={'/#testimonials'}
            mobileMenuHandler={mobileMenuHandler}
          />
        </li>
      </ul>
    </div>
  )
}

export default MobileMenu
