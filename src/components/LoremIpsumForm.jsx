import { useState } from "react"
import {data} from '../data/data'

export function LoremIpsumForm(){
  const [count, setCount] = useState(0)
  const [text, setText] = useState([])

  function handleSubmit(e){
    e.preventDefault();
    console.log("hello world")
    setText(data)
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
        <button className="btn-generator" type="submit">generate</button>
      </form>
      <article>
        {text.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}