import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const NavlinkContact = ({ styles, linkText, url }) => {
  return (
    <span className={`${open_sans.className} ${styles.navLinkContact}`}>
      <a href={url}>{linkText}</a>
    </span>
  )
}

export default NavlinkContact
