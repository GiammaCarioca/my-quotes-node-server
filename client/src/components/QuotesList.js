import { useState, useEffect } from 'react'

import { useAuthContext } from '../hooks/useAuthContext'

function QuotesList() {
  const [data, setData] = useState(null)
  const [token, setToken] = useState(null)

  const { user } = useAuthContext()

  user.getIdToken().then((token) => setToken(token))

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }

    if (!token) return

    fetch('/api/quotes', options)
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [token])

  return (
    <>
      {!data && <p>'Loading...'</p>}
      {data && (
        <ul>
          {data.map((quote) => (
            <li key={quote.id}>{quote.text}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default QuotesList
