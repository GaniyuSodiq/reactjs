import Header from "./components/Header"
import Entry from "./components/Entry"
import dataArray from "./data"

export default function App(){

  const dataEntry = dataArray.map(entry => <Entry {...entry} />)
  return (
    <>
      <Header />
      {dataEntry}
    </>
  )
}