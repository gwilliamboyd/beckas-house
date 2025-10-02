'use client'
import Image from 'next/image'
import styles from '../../styles/navbar.module.css'
import CTAButton from '../CTAButton'
import NavlinkMain from './nav-links/NavlinkMain'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1025) // pick your breakpoint
    }

    // Run once on mount to set initial state
    handleResize()

    // Attach listener
    window.addEventListener('resize', handleResize)

    // Cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

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
          />
        )}
      </div>
    </nav>
  )
}

export default Navbar
