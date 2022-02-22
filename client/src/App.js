import { useState, useEffect } from 'react'
import './App.css'

import QuoteList from './components/QuoteList'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api/quotes')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='App'>
      {!data ? <p>'Loading...'</p> : <QuoteList quotes={data} />}
    </div>
  )
}

export default App
