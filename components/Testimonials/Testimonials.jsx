import styles from '@/styles/testimonials.module.css'
import Entry from './Entry'
import entries from './entries/entries.json'

const Testimonials = () => {
  return (
    <div>
      {entries.map((entry, index) => (
        <Entry
          index={index}
          review={entry.review}
          name={entry.name}
        />
      ))}
    </div>
  )
}

export default Testimonials
