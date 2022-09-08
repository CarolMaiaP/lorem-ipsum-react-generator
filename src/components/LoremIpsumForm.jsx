import { useState } from "react"

export function LoremIpsumForm(){
  const [count, setCount] = useState(0)

  function handleSubmit(e){
    e.preventDefault();
    console.log("hello world")
  }

  return(
    <section className="lorem-generator">
      <h3>tired of boring lorem ipsum?</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="amount">Paragraphs: </label>
        <input type="number" 
        value={count}
        onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit">generate</button>
      </form>
    </section>
  )
}