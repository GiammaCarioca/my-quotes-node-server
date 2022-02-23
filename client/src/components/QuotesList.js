import { useState, useEffect } from 'react'

function QuotesList() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

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
