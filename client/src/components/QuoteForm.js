import { useState } from 'react'
import { useAuthContext } from '../hooks/useAuthContext'

export default function QuoteForm() {
  const [author, setAuthor] = useState('')
  const [text, setText] = useState('')
  const [token, setToken] = useState(null)

  const { user } = useAuthContext()

  user.getIdToken().then((token) => setToken(token))

  const handleSubmit = (e) => {
    e.preventDefault()

    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        author,
        text,
      }),
    }

    if (!token) return

    fetch('/api/quotes/create', requestOptions)
  }

  return (
    <>
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
