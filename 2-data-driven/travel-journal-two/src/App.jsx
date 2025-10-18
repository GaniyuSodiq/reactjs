import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App() {
  const entries = data.map(entry => <Entry
    key={entry.id} 
    entry={entry}
    // img={entry.img} 
    // title={entry.title}
    // country={entry.country} 
    // googleMapLink={entry.googleMapsLink}
    // dates={entry.dates}
    // text={entry.text}    
  />)
  return (
    <>
      <Header />
      {entries}
    </>
  )
}