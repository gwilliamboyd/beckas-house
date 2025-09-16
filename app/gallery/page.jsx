import styles from '@/styles/gallery.module.css'
import fs from 'fs'
// import Image from 'next/image'
import path from 'path'

// auto-detect images in folder
const getImageCount = () => {
  const imgDir = path.join(process.cwd(), 'public/gallery-images/')
  const files = fs.readdirSync(imgDir)
  const images = files.filter(file =>
    /\.(png|jpe?g|gif|webp|avif|svg)$/i.test(file)
  )

  const imgArr = []

  for (let i = 0; i < images.length; i++) {
    imgArr.push(images[i])
  }

  return imgArr
}

// set masonry layout image heights
// prettier-ignore
const setMasonry = () => {
  const imgSizes = [
    '1em', '2em', '3em', '4em', '1.4em',
    '1.8em', '2.6em', '2.2em', '3.4em', '3.2em',
  ]
  const images = document.querySelectorAll(`${styles.galleryImg}`)
  for (let i = 0; i < images.length; i++) {
    images[i].styles.inlineSize = imgSizes[i]
  }
}

// setMasonry()

const page = () => {
  const imgSizes = [
    '8em',
    '7em',
    '6em',
    '5em',
    '8.4em',
    '7.8em',
    '6.6em',
    '5.2em',
    '8.8em',
    '7.2em',
  ]
  return (
    <main className={styles.galleryMaster}>
      <div className={styles.galleryContainer}>
        {getImageCount().map((img, key) => {
          console.log(img)
          // const imgHeight = setMasonry()
          return (
            <img
              key={key}
              className={styles.galleryImg}
              src={`/gallery-images/${img}`}
              alt={img}
              // width={'auto'}
              // style={{
              //   height: imgSizes[key % imgSizes.length],
              //   objectFit: 'cover',
              //   objectPosition: 'center',
              // }}
              // height={imgHeight}
            />
          )
        })}
      </div>
    </main>
  )
}

export default page
