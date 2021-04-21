import React from 'react'

import PersonIcon from '@material-ui/icons/PersonSharp'
import ExitToAppIcon from '@material-ui/icons/ExitToAppSharp'
import IconButton from '@material-ui/core/IconButton'

export default function NavBar(props) {
  function signOut() {
    props.userLoginHandler('', '')
  }

  return (
    <div className="navBarContainer">
      <div className="signedInGroup">
        <IconButton
          disabled
          className="personIcon"
          color="primary"
          style={{
            border: 'none',
            margin: 2,
            backgroundColor: '#b0d9f5',
            color: 'black',
          }}
        >
          <PersonIcon />
        </IconButton>

        <span className="personEmail">{props.email}</span>

        <IconButton
          variant="contained"
          color="primary"
          onClick={() => signOut()}
          style={{
            border: 'none',
            margin: 2,
            backgroundColor: '#FEDB77',
            color: 'black',
          }}
        >
          <ExitToAppIcon />
        </IconButton>
      </div>
    </div>
  )
}
