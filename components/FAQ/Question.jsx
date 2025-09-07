import Image from 'next/image'

const Question = ({
  styles,
  bodoni_moda,
  open_sans,
  imgSrc,
  headingA,
  headingHighlight,
  headingB,
  paragraph,
  altText,
}) => {
  return (
    <div className={styles.questionContainer}>
      <Image
        src={imgSrc}
        width={558}
        height={272}
        alt={altText}
      />
      <div className={`${bodoni_moda.className} ${styles.faqText}`}>
        <h2 className={styles.faqHeading}>
          {headingA}
          <span className={styles.headingHighlight}>{headingHighlight}</span>
          {headingB}
        </h2>
        <p className={`${open_sans.className} ${styles.faqParagraph}`}>
          {paragraph}
        </p>
      </div>
    </div>
  )
}

export default Question
