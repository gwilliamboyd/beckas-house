import styles from '@/styles/faq.module.css'
import { Open_Sans } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'
import Question from './Question'

// Font imports
const bodoni_moda = Bodoni_Moda({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const FAQ = () => {
  return (
    <div className={styles.faqMaster}>
      <Question
        styles={styles}
        bodoni_moda={bodoni_moda}
        open_sans={open_sans}
        imgSrc={'/faq-1.png'}
        altText={'Beckas House - FAQ'}
        headingA={'What makes '}
        headingHighlight={"Becka's House"}
        headingB={' successful?'}
        paragraph={
          'While our goal is to provide permanent supported housing fully customized to an individual’s needs, it really begins with relationships. We build relationships first.  It’s not just about brick and mortar. It’s about providing the “scaffolding” for abundant life, which includes rich relationships in a safe environment where each person is loved and valued. Our residents, referred to as House Sisters, are a necessary contributor in making Becka’s House a home. It means being a “family member” with a House Mom, House Sisters and dedicated caregivers.'
        }
      />
      <Question
        styles={styles}
        bodoni_moda={bodoni_moda}
        open_sans={open_sans}
        imgSrc={'/faq-1.png'}
        altText={'Beckas House - FAQ'}
        headingA={'What is provided for the '}
        headingHighlight={'House Sisters'}
        headingB={'?'}
        paragraph={
          <>
            <>
              Independence in living with individualized support, abundant life,
              and rich relationships.
            </>
            <br />
            <br />
            <>
              We focus on abilities and continuous improvement by introducing
              new experiences that help broaden skills and interests. As a
              contributing member of the House Family, participation in daily
              group activities fosters meaningful relationships and generates
              new abilities.
            </>
            <br />
            <br />
            <>
              Whether it’s going on a community outing, helping with meal
              planning and preparations, or always having a positive word of
              affirmation for the other house sisters, each family member is
              cherished because of their unique talents and the pure joy they
              bring to one another.
            </>
          </>
        }
      />
    </div>
  )
}

export default FAQ
