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
          {data.map((quote, idx) => (
            <li key={idx}>{quote}</li>
          ))}
        </ul>
      )}
    </>
  )
}

export default QuotesList
