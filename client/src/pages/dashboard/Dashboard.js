import { useState } from 'react'
import { useAuthContext } from '../../hooks/useAuthContext'

import './Dashboard.css'

import QuotesList from '../../components/QuotesList'
import UsersList from '../../components/UsersList'

export default function Dashboard() {
  const [isAdmin, setIsAdmin] = useState(null)

  const { user } = useAuthContext()

  user
    .getIdTokenResult()
    .then((idTokenResult) => setIsAdmin(idTokenResult.claims.admin))

  return (
    <>
      <h2>Dashboard</h2>
      {isAdmin && <UsersList />}
      <QuotesList />
    </>
  )
}
