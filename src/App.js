import React, { useEffect, useState } from 'react'
import SignPage from './SignPage'
import TodoPage from './TodoPage'
import NavBar from './NavBar'

import { createMuiTheme } from '@material-ui/core/styles'

import './styles.css'

export default function App() {
  const [userId, setUserId] = useState(
    localStorage.getItem('userIdInLocalStorage') || ''
  )
  const [email, setEmail] = useState(
    localStorage.getItem('emailInLocalStorage') || ''
  )

  React.useEffect(() => {
    localStorage.setItem('userIdInLocalStorage', userId)
  }, [userId])

  React.useEffect(() => {
    localStorage.setItem('emailInLocalStorage', email)
  }, [email])

  const theme = createMuiTheme({
    palette: {
      primary: { main: '#444D63' },
    },
  })

  useEffect(() => {
    // console.log(email)
  }, [email])

  const userLoginHandler = (newId, newEmail) => {
    if (newId !== undefined) {
      setUserId(newId)
    }
    if (newEmail !== undefined) {
      setEmail(newEmail)
    }
  }

  return (
    <>
      {/*<span>{userLoginInfo.id}</span>*/}
      {userId === '' ? (
        <SignPage userLoginHandler={userLoginHandler} theme={theme} />
      ) : (
        <>
          <NavBar email={email} userLoginHandler={userLoginHandler} />
          <TodoPage userId={userId} email={email} />
        </>
      )}
    </>
  )
}
