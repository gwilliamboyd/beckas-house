import styles from '@/styles/info.module.css'
import InfoQuestion from './InfoQuestion'

const Info = () => {
  return (
    <div className={styles.infoMaster}>
      <h2 className={styles.infoHeading}>FAQ</h2>
      <InfoQuestion
        heading={
          'How can I apply for our loved one to become a resident at Becka’s House?'
        }
        paragraph={
          'Currently, we do not have an opening, but you are welcome to be placed on our waitlist by calling or emailing us. Click here for details regarding consulting services available to help you design a beautiful future for your loved one, including other residential resources. '
        }
      />
    </div>
  )
}

export default Info
