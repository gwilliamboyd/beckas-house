import styles from '@/styles/testimonials.module.css'
import entries from './entries/entries.json'

const Entry = ({ index, review, name }) => {
  return (
    <div
      key={index}
      className={styles.entryWrapper}>
      <h4 className={styles.entryReview}>{review}</h4>
      <p className={styles.entryName}>{name}</p>
    </div>
  )
}

export default Entry
