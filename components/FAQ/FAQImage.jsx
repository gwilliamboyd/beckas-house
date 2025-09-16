import styles from '@/styles/faq.module.css'

const FAQImage = ({ imgSrc }) => {
  return (
    <div
      className={styles.faqImage}
      style={{ backgroundImage: `url(${imgSrc})` }}
    />
  )
}

export default FAQImage
