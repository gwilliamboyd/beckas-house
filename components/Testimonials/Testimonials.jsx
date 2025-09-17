'use client'
import styles from '@/styles/testimonials.module.css'
import Entry from './Entry'
import entries from './entries/entries.json'
import { useState, useEffect } from 'react'

const getEntry = arr => {
  let index = 0
  for (let i = 0; i < arr.length; i++) {
    setTimeout(() => {
      index++
    }, 8000)
  }
  return index
}

const getReview = (arr, i) => {
  return entries[i].review
}

const getName = (arr, i) => {
  return entries[i].name
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1 < entries.length ? prev + 1 : 0))
    }, 5000)

    return () => clearInterval(interval)
  }, [entries.length])

  return (
    <div>
      <Entry
        index={currentIndex}
        review={entries[currentIndex].review}
        name={entries[currentIndex].name}
      />
      {/* {entries.map((entry, index) => (
        <Entry
          index={index}
          review={entry.review}
          name={entry.name}
        />
      ))} */}
    </div>
  )
}

export default Testimonials
