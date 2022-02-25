import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Create.css'

import QuoteForm from '../../components/QuoteForm'

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(null)

  const { user } = useAuthContext()

  user
    .getIdTokenResult()
    .then((idTokenResult) => setIsAdmin(idTokenResult.claims.admin))

  return (
    <>
      <h2>Add a Quote</h2>
      {isAdmin && <QuoteForm />}
    </>
  )
}
