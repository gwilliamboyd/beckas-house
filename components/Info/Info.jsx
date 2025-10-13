import styles from '@/styles/info.module.css'
import InfoQuestion from './InfoQuestion'
import { Open_Sans } from 'next/font/google'

const open_sans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
})

const Info = () => {
  return (
    <div className={styles.infoMaster}>
      <h2 className={styles.infoHeading}>FAQ</h2>
      {/* <InfoQuestion
        heading={
          'How can I apply for our loved one to become a resident at Becka’s House?'
        }
        paragraph={`Currently, we do not have an opening, but you are welcome to be placed on our waitlist by calling or emailing us. Click ${(
          <a href='https://kmresidentialsolutions.com/'>here</a>
        )} for details regarding consulting services available to help you design a beautiful future for your loved one, including other residential resources.`}
      /> */}
      <div className={`${open_sans.className} ${styles.infoQuestion}`}>
        <h4 className={styles.infoQuestionHeading}>
          How can I apply for our loved one to become a resident at Becka’s
          House?
        </h4>
        <p className={styles.infoQuestionParagraph}>
          Currently, we do not have an opening, but you are welcome to be placed
          on our waitlist by calling or emailing us. Click{' '}
          <a
            href='https://kmresidentialsolutions.com/'
            target='_blank'
            style={{ color: '#78be99' }}>
            here
          </a>{' '}
          for details regarding consulting services available to help you design
          a beautiful future for your loved one, including other residential
          resources.
        </p>
      </div>
      <InfoQuestion
        heading={'What is the monthly cost to be a resident at Becka’s House?'}
        paragraph={
          'Pricing varies depending on the level of support needed. Monthly costs consist of rent, utilities, full-time residential caregiver support, meals and snacks, and home maintenance. Our goal is to provide abundant life through a Christian Family setting, and we strive to be good stewards of our resources. Through active donors, Medicaid waiver programs, and private pay, our goal is to keep costs at a competitive rate. Each placement is different depending on the Medicaid waiver program, SSI, or private pay situation.'
        }
      />
      <InfoQuestion
        heading={'What transportation services are offered at Becka’s House?'}
        paragraph={
          'Our caregivers can provide transportation to and from group activities. For example, social activities within the community such as church, meals in local restaurants, bowling, movies, shopping trips, etc. For other transportation needs such as getting to and from a day habilitation, vocational program or employment, we recommend DART Paratransit or other ride services. Such costs are absorbed by the resident or resident’s family.'
        }
      />
      <InfoQuestion
        heading={
          'Who will take my loved one to his/her routine appointments such as medical, dental, therapy, or other service providers?'
        }
        paragraph={
          'The family or House Mom can assist with making arrangements with Attendant care providers to escort your loved one to these appointments for an additional fee.'
        }
      />
      <InfoQuestion
        heading={
          'Does my loved one get his/her own room? What about a private bathroom?'
        }
        paragraph={
          'Our residents have their own rooms. In some situations, they will have a private bathroom and in some situations they may share a bathroom with one other resident.'
        }
      />
      <InfoQuestion
        heading={'Is the house furnished?'}
        paragraph={
          'Becka’s House is furnished with the exception of your loved one’s bedroom. Each resident will provide his/her own bedroom furniture including bed and bath linens. You may decorate the bedroom to suit your loved one’s tastes. You may also provide a TV in their bedroom, although we do not provide cable TV in the house. Internet is provided and smart TV’s can use the internet for streaming.'
        }
      />
      <InfoQuestion
        heading={'Is Becka’s House co-ed?'}
        paragraph={'No.'}
      />
      <InfoQuestion
        heading={
          'Does Becka’s House have special events for the residents and their families?'
        }
        paragraph={
          'Yes. We host a quarterly dinner with residents’ families on the first Sunday of the quarter and other holiday gatherings and special events throughout the year.'
        }
      />
      <InfoQuestion
        heading={
          'What permanent solution do you offer for residents living at Becka’s House?'
        }
        paragraph={
          'Our mission of providing secure permanent supported housing means that you will not have to worry about what will happen to your loved one after you are no longer capable of overseeing the care for her. We offer solutions to ensure your loved one will always have secure supported housing should their need reach beyond the capabilities of living in our Christian family home setting and those of our full-time caregivers.'
        }
      />
      <InfoQuestion
        heading={
          'Can I tour Becka’s House to determine if my loved one would thrive in the Neighborhood Companion Care Home model?'
        }
        paragraph={
          'Yes. We enjoy giving tours! Call or email us to schedule a tour!'
        }
      />
    </div>
  )
}

export default Info
