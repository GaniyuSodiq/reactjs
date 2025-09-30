import Header from './components/Header'
import Entry from './components/Entry'
import entryData from './assets/data'

export default function App() {
  const entryElements = entryData.map(entry => 
  <Entry
    img={
      {
        src: entry.img.src,
        alt: entry.img.alt
      }
    }
    title={entry.title}
    country={entry.country}
    googleMapsLink={entry.googleMapsLink}
    dates={entry.dates}
    text={entry.text}
  />)
  return (
    <>
      <Header />
      {entryElements}
    </>
  )
}
