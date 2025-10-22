import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"

export default function App(){
  const entryItems = data.map(entry => <Entry key={entry.id} entry={entry} />)
  return (
    <>
      <Header />
      {entryItems}
    </>
  )
}