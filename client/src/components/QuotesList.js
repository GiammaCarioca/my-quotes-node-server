import { useState, useEffect } from 'react'
// import { projectAuth } from '../firebase/config'

function QuotesList() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  // async function fetchFromAPI() {
  //   const user = projectAuth.currentUser

  //   if (!user) return

  //   const token = await user.getIdToken()

  //   if (token) {
  //     const res = await fetch('/api/quotes', {
  //       method: 'GET',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })

  //     return res.json()
  //   } else {
  //     console.log('nao tem token')
  //   }
  // }

  // useEffect(() => {
  //   fetchFromAPI().then((quotes) => setData(quotes))
  // }, [])

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
