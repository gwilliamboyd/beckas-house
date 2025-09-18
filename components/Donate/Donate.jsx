import styles from '@/styles/donate.module.css'
import { Bodoni_Moda, Open_Sans } from 'next/font/google'
import CTAButton from '../CTAButton'

const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Donate = () => {
  return (
    <div className={styles.donateMaster}>
      <div className={styles.donateWrapper}>
        <div className={styles.donateHeadingWrapper}>
          <h2 className={`${bodoni_moda.className} ${styles.donateHeading}`}>
            Donate
          </h2>
          <h3 className={styles.donateSubHeading}>BJB Memorial Fund</h3>
        </div>
        <CTAButton
          buttonText={'Donate Here'}
          url={'https://give.donationpay.org/charitysmith/bjbmemorialfund/'}
          fontSize={'22px'}
        />
        <div
          className={`${open_sans.className} ${styles.donateParagraphWrapper}`}>
          <p>
            The BJB Memorial Fund, established in 2019, is a tribute to the
            memory of Bonnie Jane Budahelyi. Her youngest granddaughter, Becka,
            was diagnosed at birth (January 18, 1997) with porencephaly, an
            extremely rare neurological disorder of the central nervous system.
            Due to her diagnosis, Becka has multiple disabilities, including
            cerebral palsy, autism and she is legally blind. <br />
            To help honor Bonnie’s love and admiration of Becka and all of God’s
            children living with and without disabilities, distributions from
            this fund will help develop, operate and maintain neighborhood homes
            in the Dallas-Fort Worth area that provide supported permanent
            housing to adults with intellectual and developmental disabilities
            (IDD) due to the overwhelming need. <br />
            Currently, 100,000 adults with IDD living in the DFW metroplex have
            at least one challenge to living independently. There are beds in
            Medicaid Waiver Group Homes and Centers for only 3,000 adults in the
            state of Texas. This permanent housing solution brings peace to
            aging parents and grandparents.
          </p>
          <a
            className={styles.donateLink}
            href='#'>
            Learn More
          </a>
        </div>
      </div>
    </div>
  )
}

export default Donate
