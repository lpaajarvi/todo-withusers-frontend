import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { ThemeProvider } from '@material-ui/core/styles'

import axios from 'axios'

import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye'

import background from './img/background.png'

let host = ''
host = 'http://localhost:4000'

export default function SignPage(props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const changeEmail = (e) => {
    setEmail(e.target.value)
    if (errorMessage !== '') setErrorMessage('')
  }

  const changePassword = (e) => {
    setPassword(e.target.value)
    if (errorMessage !== '') setErrorMessage('')
  }

  const postForm = () => {
    const signCredentials = {
      email: email,
      password: password,
    }

    axios.post(host + '/app/signin', signCredentials).then((response) => {
      // console.log(response.data)
      props.userLoginHandler(response.data.id, response.data.email)
      if (response.data.status === 'FAILED') {
        if (response.data.message === 'Empty credentials supplied') {
          setErrorMessage(response.data.message)
        } else {
          setErrorMessage("Username and password don't match!")
        }
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postForm()
  }

  return (
    <div className="signPage">
      <div className="pictureContainer">
        <img src={background} alt="Sign in Page" className="picture" />
      </div>

      <div className="signContainer">
        <form
          className="signForm"
          noValidate
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <span className="signInText">Sign-in!</span>
          <div className="signGridContainer">
            <TextField
              className="signTextfield"
              id="email-input"
              label="Email ID"
              type="email"
              autoComplete=""
              variant="outlined"
              onChange={changeEmail}
              value={email}
              error={errorMessage}
            />
            <div className="textFieldWrapper">
              <TextField
                className="signTextfieldPassword"
                id="outlined-password-input"
                label="Password"
                type="password"
                autoComplete="current-password"
                variant="outlined"
                onChange={changePassword}
                value={password}
                helperText={errorMessage}
                error={errorMessage}
              ></TextField>
              <RemoveRedEyeIcon className="textFieldIcon" />
            </div>
            <ThemeProvider theme={props.theme}>
              <Button
                className="nextButton"
                variant="contained"
                color="primary"
                /* onClick={postForm} */
                type="submit"
              >
                Next
              </Button>
            </ThemeProvider>
          </div>
        </form>
      </div>
    </div>
  )
}
