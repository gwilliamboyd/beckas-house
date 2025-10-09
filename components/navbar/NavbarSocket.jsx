'use client'
import useIsMobile from '@/hooks/useIsMobile'
import styles from '../../styles/navbar.module.css'
import SocialIcon from '../SocialIcon'
import NavlinkContact from './nav-links/NavlinkContact'

const NavbarSocket = () => {
  const isMobile = useIsMobile(1150)
  return (
    <div className={styles.socketMaster}>
      <div className={styles.socketWrapper}>
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
              url={'https://www.facebook.com'}
              fillColor={'#FFFFFF'}
              site={'facebook'}
              dimensions={isMobile ? 28 : 36}
            />
            {/* <SocialIcon
              styles={styles}
              url={'https://www.instagram.com'}
              fillColor={'#FFFFFF'}
              site={'instagram'}
              dimensions={isMobile ? 28 : 36}
            /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavbarSocket
