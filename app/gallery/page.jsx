import styles from '@/styles/gallery.module.css'
import fs from 'fs'
// import Image from 'next/image'
import path from 'path'

// auto-detect images in folder
const getImageCount = () => {
  const imgDir = path.join(process.cwd(), 'public/gallery-images/')
  const files = fs.readdirSync(imgDir)

  const imgArr = []

  for (let i = 0; i < files.length; i++) {
    imgArr.push(files[i])
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

const page = () => {
  return (
    <main className={styles.galleryMaster}>
      <div className={styles.galleryContainer}>
        {getImageCount().map((img, key) => {
          console.log(img)
          return (
            <img
              key={key}
              className={styles.galleryImg}
              src={`/gallery-images/${img}`}
              alt={img}
            />
          )
        })}
      </div>
    </main>
  )
}

export default page
