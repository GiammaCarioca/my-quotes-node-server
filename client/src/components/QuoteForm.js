import { useState } from 'react'

export default function TransactionForm({ uid }) {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(author, text)
  }

  return (
    <>
      <h3>Add a Quote</h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Author:</span>
          <input
            type='text'
            required
            onChange={(e) => setAuthor(e.target.value)}
            value={author}
          />
        </label>
        <label>
          <span>Quote:</span>
          <input
            type='textarea'
            required
            onChange={(e) => setText(e.target.value)}
            value={text}
          />
        </label>
        <button>Add Quote</button>
      </form>
    </>
  )
}
