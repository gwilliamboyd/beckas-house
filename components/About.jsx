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
    <div
      id={'about-us'}
      className={`${bodoni_moda.className} ${styles.aboutMaster}`}>
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
                Becka was born in 1997 with a diagnosis of{' '}
                <b>intraventricular hemorrhage</b>, which led to{' '}
                <b>porencephaly</b>, a rare neurological disorder characterized
                by cysts or cavities in the brain. Doctors explained that her
                brain hadn’t fully developed and that her prognosis was
                uncertain. Her family was simply told:{' '}
                <em>
                  take her home, love her, and care for her as you would any
                  child.
                </em>
              </p>
              <p>So, they did exactly that.</p>
              <p>
                As an infant and toddler, Becka experienced significant
                developmental delays. Over time, she was diagnosed with{' '}
                <b>Optic Nerve Atrophy</b> (leaving her legally blind),{' '}
                <b>immune thrombocytopenia (ITP)</b>, and <b>cerebral palsy</b>{' '}
                affecting the left side of her body. Additional diagnoses
                followed, including
                <b>
                  autism, cortical visual impairment (CVI), speech impairment,
                  auditory processing disorder
                </b>
                , and a <b>seizure disorder</b>.
              </p>
              <p>
                Despite these challenges, and with the support of her family,
                educators, therapists, and a community that believed in her,
                Becka graduated high school in 2015. That same year, she was
                accepted into the <b>EXIT Program</b> at the{' '}
                <b>Texas School for the Blind and Visually Impaired (TSBVI)</b>,
                a life-changing opportunity in Austin where Becka lived in a
                dorm that helped her develop vital life skills, build meaningful
                relationships, and gain confidence in her supported
                independence.
              </p>
              <p>
                Recognizing how much Becka had grown at TSBVI and the hard work
                she did to develop skills, her family knew she needed a
                supportive environment where she could continue to thrive,
                maintain the routines that helped her succeed, and preserve the
                friendships and sense of purpose she had found. But after an
                extensive search, they realized that such a place simply didn’t
                exist.
              </p>
              <p>So, they created it.</p>
              <p>
                In 2019, <b>Becka’s House</b> was founded. An intentional,
                loving home designed to support individuals with complex
                disabilities in living full, meaningful lives. For over six
                years, Becka has flourished, surrounded by her{' '}
                <b>House Sisters</b> and a devoted team of intervenors and
                caregivers known as <b>Team Becka</b>.
              </p>
              <p>
                Each resident of Becka’s House has her own unique journey, but
                they all share a common thread: the belief that everyone
                deserves to live with dignity, purpose, and joy. At Becka’s
                House, that belief is lived out every single day.
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
