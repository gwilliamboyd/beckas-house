import styles from '@/styles/about.module.css'
import { Open_Sans } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'
import Image from 'next/image'

// Font imports
const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const About = () => {
  return (
    <div className={`${bodoni_moda.className} ${styles.aboutMaster}`}>
      <h1 className={styles.aboutHeading}>About Becka's House</h1>
      <div className={styles.aboutInfo}>
        <div className={styles.aboutText}>
          <div className={styles.aboutTextSegment}>
            <h2 className={styles.aboutSubHeading}>
              What is{' '}
              <span className={styles.headingHighlight}>Becka's House</span>?
            </h2>
            <p className={`${open_sans.className} ${styles.aboutParagraph}`}>
              Becka’s House is a neighborhood companion care home located in
              Plano Texas that provides permanent supported housing for young
              ladies with multiple disabilities.
            </p>
          </div>
          <div className={styles.aboutTextSegment}>
            <h2 className={styles.aboutSubHeading}>
              What Inspired the{' '}
              <span className={styles.headingHighlight}>Creation</span> of
              Becka’s House?
            </h2>
            <p className={`${open_sans.className} ${styles.aboutParagraph}`}>
              Becka’s House is a neighborhood companion care home located in
              Plano Texas that provides permanent supported housing for young
              ladies with multiple disabilities.
            </p>
          </div>
        </div>
        <div className={styles.aboutImageContainer}>
          <Image
            className={styles.aboutImage}
            src={'/about-us-1.png'}
            fill
            sizes={'100vw'}
            style={{
              objectFit: 'cover',
              backgroundPosition: 'center',
            }}
            //   width={640}
            //   height={395}
            alt='About Beckas House'
          />
        </div>
      </div>
      <div className={`${styles.aboutInfo} ${styles.aboutInfoRev}`}>
        <div className={styles.aboutText}>
          <div className={styles.aboutTextSegment}>
            <h2 className={styles.aboutSubHeading}>
              What is{' '}
              <span className={styles.headingHighlight}>Becka's Story</span>?
            </h2>
            <div className={`${open_sans.className} ${styles.aboutParagraph}`}>
              <p>
                At birth in 1997, Becka was diagnosed with intraventricular
                hemorrhage resulting in porencephaly, an extremely rare
                neurological disorder of the central nervous system
                characterized by cysts or cavities within the cerebral
                hemisphere. The doctors told Becka’s family that her prognosis
                and development was yet to be determined. As an infant and
                toddler, Becka was delayed in obtaining milestones. She was
                diagnosed with Optic Nerve Atrophy, leaving her legally blind,
                immune thrombocytopenia, and hemiparesis (cerebral palsy) which
                affects her leg and arm on her left side. She was later
                diagnosed with autism, cortical visual impairment (CVI), speech
                impairment, auditory processing disorder and has a history of
                seizures.
              </p>
              <p>
                Because of her multiple disabilities and the success she had in
                the EXIT program, Becka’s family knew it was important for Becka
                to live in a safe, nurturing environment where she could be
                supported and put forth the skills she mastered while utilizing
                systems and routines developed specifically for her at TSBVI.
                Along with her entire TSBVI support team, the family recognized
                the hard work Becka did to achieve skills that allowed her to be
                a valued classmate, dorm sister, student and friend to others.
                Her family did not want Becka to lose the skills she worked so
                hard to achieve as well as her sense of accomplishment she felt
                by achieving every task (with support) that brings her so much
                joy. Most importantly, they did not want Becka to lose her sense
                of belonging through fostering genuine friendships and finding
                compassionate caregivers and intervenors.
              </p>
              <p>
                Her family looked far and wide to find such an environment, but
                nothing existed. And when Becka’s family came to that
                realization, they set out and created an environment where Becka
                could live her most meaningful, purpose-filled life.  Becka’s
                House has been operating successfully for over 5 years. Becka is
                indeed living an abundant life because of her House Sisters and
                the team of caregivers and intervenors lovingly known as ‘Team
                Becka.’  Residents at Becka’s House are known as House Sisters.
                Naturally, each House Sister has their own divine story of how
                they found Becka’s House and soon thereafter became a resident.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.aboutImageContainer}>
          <Image
            className={styles.aboutImage}
            src={'/about-us-2.png'}
            fill
            sizes={'100vw'}
            style={{
              objectFit: 'cover',
              backgroundPosition: 'center',
            }}
            //   width={640}
            //   height={751}
            alt='About Beckas House'
          />
        </div>
      </div>
    </div>
  )
}

export default About
