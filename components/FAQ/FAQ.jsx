import Image from 'next/image'
import styles from '@/styles/faq.module.css'
import Question from './Question'
import { Open_Sans } from 'next/font/google'
import { Bodoni_Moda } from 'next/font/google'

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
        imgSrc={'/faq-1.png'}
        headingA={'What makes '}
        headingHighlight={"Becka's House"}
        headingB={' successful?'}
        paragraph={
          'While our goal is to provide permanent supported housing fully customized to an individual’s needs, it really begins with relationships. We build relationships first.  It’s not just about brick and mortar. It’s about providing the “scaffolding” for abundant life, which includes rich relationships in a safe environment where each person is loved and valued. Our residents, referred to as House Sisters, are a necessary contributor in making Becka’s House a home. It means being a “family member” with a House Mom, House Sisters and dedicated caregivers.'
        }
      />
      <Question
        imgSrc={'/faq-2.png'}
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
      <Question
        imgSrc={'/faq-3.png'}
        headingA={'What do you provide for the '}
        headingHighlight={'Extended Family'}
        headingB={'?'}
        paragraph={
          <>
            <>
              Comfort and peace of mind in knowing that your loved one is
              surrounded by peers and a team of caregivers who love them as
              family.
            </>
            <br />
            <br />
            <>
              They will be living in a safe Christian home with customized
              support to live independently, while fostering relationships to
              live abundantly. Our permanent supported solution brings relief in
              knowing that your wishes for your loved one will be carried out
              when you are no longer adequately capable or alive to do so.
            </>
          </>
        }
      />
      {/* Question format - italic bold <p> */}
      <div className={styles.questionContainer}>
        <Image
          src={'/faq-4.png'}
          width={558}
          height={272}
          alt={'Beckas House FAQ image'}
        />
        <div className={`${bodoni_moda.className} ${styles.faqText}`}>
          <h2 className={styles.faqHeading}>
            How were you able to establish Becka’s House and find your{' '}
            <span className={styles.headingHighlight}>House Families</span>?
          </h2>
          <p className={`${open_sans.className} ${styles.faqEmParagraph}`}>
            <em>
              By wisdom a house is built, and by understanding it is
              established; and by knowledge the rooms are filled with all
              precious and pleasant riches. -{' '}
              <span className={styles.faqEmHighlight}>Proverbs 24:3-4</span>
            </em>
          </p>
          <p className={`${open_sans.className} ${styles.faqParagraph}`}>
            <>
              <>
                Naturally, need drove us while we let God orchestrate His divine
                plan and use us to do His work.
              </>
              <br />
              <br />
              <>
                At the time Becka’s House was being established, the family
                didn’t know who Becka’s House Mom, caregivers/intervenors or
                House Sisters would be, but they put their trust in God to bring
                them forward. And did He deliver in the most amazing and
                surprising way!
              </>
            </>
          </p>
        </div>
      </div>
      {/* Question format - 2 photos <p> */}
      <div className={styles.questionContainer}>
        <div className={styles.faqImageWrapper}>
          <Image
            src={'/faq-5.png'}
            width={558}
            height={373}
            alt={'Beckas House FAQ image'}
          />
          <Image
            src={'/faq-6.png'}
            width={558}
            height={373}
            alt={'Beckas House FAQ image'}
          />
        </div>
        <div className={`${bodoni_moda.className} ${styles.faqText}`}>
          <h2 className={styles.faqHeading}>
            What attracts dedicated caregivers to{' '}
            <span className={styles.headingHighlight}>Becka's House</span>?
          </h2>
          <p className={`${open_sans.className} ${styles.faqParagraph}`}>
            <>
              <>
                At Becka’s House, we often get asked a beautiful question: What
                draws such dedicated, compassionate people to serve here? The
                answer is simple—and deeply spiritual.
              </>
              <br />
              <br />
              <>
                It starts with faith. The kind of faith that believes every
                person is worthy of love, healing, and belonging. Many of our
                caregivers, intervenors, and mentors feel called to this work.
                They are drawn not by a paycheck, but by a powerful inner desire
                to serve—to be the hands and feet of grace in someone else’s
                story.
              </>
              <br />
              <br />
              <>
                It also comes from a desire to be part of something greater. At
                Becka’s House, service isn’t a job—it’s a sacred journey. Each
                team member forms a unique bond with the House Sisters, walking
                alongside them in moments of rebuilding, resilience, and
                rediscovery. Our caregivers don’t just offer support—they offer
                presence. Compassion. Time. Trust.
              </>
              <br />
              <br />
              <>And in return? They receive something extraordinary.</>
              <br />
              <br />
              <>
                Our House Sisters—women reclaiming their stories and stepping
                into new life—radiate love, strength, joy, and a light that
                transforms those around them. Many of our team members speak of
                the mutual healing that happens here. They came to serve—but
                found their own lives enriched in ways they never expected by
                being a part of a community where hope is alive and miracles
                happen daily.
              </>
              <br />
              <br />
              <>
                Each caregiver has a testimony. Stories of faith deepened,
                hearts opened, and purpose rediscovered. Becka’s House becomes
                not just a place of acceptance for our residents—but for
                everyone who walks through the door with open hands and a
                willing heart.
              </>
            </>
          </p>
        </div>
      </div>
    </div>
  )
}

export default FAQ
