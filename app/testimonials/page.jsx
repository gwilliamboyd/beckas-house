import styles from '@/styles/testimonials.module.css'
import Testimonials from '@/components/Testimonials/Testimonials'

const page = () => {
  return (
    <div className={styles.testimonialsMaster}>
      <div className={styles.testimonialsWrapper}>
        <Testimonials />
      </div>
    </div>
  )
}

export default page
