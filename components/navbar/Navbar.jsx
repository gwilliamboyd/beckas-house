'use client'
import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
import CTAButton from '../CTAButton'
import NavlinkMain from './nav-links/NavlinkMain'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faL } from '@fortawesome/free-solid-svg-icons'
import useIsMobile from '@/hooks/useIsMobile'
import MobileMenu from './nav-links/MobileMenu'

const Navbar = () => {
  const isMobile = useIsMobile(1150)

  const [menuOpen, setMenuOpen] = useState(false)

  const mobileMenuHandler = () => {
    if (!menuOpen) setMenuOpen(true)
    else setMenuOpen(false)
  }

  return (
    <nav className={`${styles.master}`}>
      <div className={styles.innerContainer}>
        <div className={styles.logoContainer}>
          <Link href={'/'}>
            <Image
              className={styles.logoImage}
              src={'/beckas-house-logo.png'}
              width={isMobile ? 220 : 260}
              height={isMobile ? 102 : 120}
              alt="Becka's House logo"
            />
          </Link>
          {isMobile ? null : (
            <div className={styles.mainContainer}>
              <NavlinkMain
                styles={styles}
                url={'/#about-us'}
                linkText={'About Us'}
              />
              <NavlinkMain
                styles={styles}
                url={'/#faq'}
                linkText={'FAQ'}
              />
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
          )}
        </div>
        {isMobile ? null : (
          <CTAButton
            buttonText={'Donate Here'}
            url={'https://give.donationpay.org/charitysmith/bjbmemorialfund/'}
            fontSize={'20px'}
          />
        )}
        {isMobile && (
          <FontAwesomeIcon
            className={styles.mobileMenuIcon}
            icon={faBars}
            onClick={mobileMenuHandler}
          />
        )}
        {menuOpen && (
          <MobileMenu
            menuOpen={menuOpen}
            setMenuOpen={setMenuOpen}
            mobileMenuHandler={mobileMenuHandler}
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
