import { useState, useEffect } from 'react'

function UsersList() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/users/')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])

  return (
    <div className='App'>
      {!data ? <p>'Loading...'</p> : <p>{data.message}</p>}
    </div>
  )
}

export default UsersList
