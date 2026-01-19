import Form from "./Form"

export default function App(){
  return (
    <>
      <h1>You bio data</h1>
      <p>please fill out the form below</p>
      <Form />
      <div className="answer">The filled parts appear here</div>
    </>
  )
}