import { Bodoni_Moda } from 'next/font/google'

const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
})

const NavlinkMain = ({ styles, linkText, url }) => {
  return (
    <span className={`${bodoni_moda.className} ${styles.navLinkMain}`}>
      <a href={url}>{linkText}</a>
    </span>
  )
}

export default NavlinkMain
