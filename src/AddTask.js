import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'
import axios from 'axios'

let host = ''
host = 'http://localhost:4000'

export default function AddTask(props) {
  const [inputTitle, setInputTitle] = useState('')
  const [inputContent, setInputContent] = useState('')

  const changeTitle = (e) => {
    setInputTitle(e.target.value)
  }

  const changeContent = (e) => {
    setInputContent(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    postTask()
  }

  function postTask() {
    const newTask = {
      title: inputTitle,
      content: inputContent,
      author_id: props.userId,
    }
    // console.log('posting')

    axios
      .post(host + '/app/create', newTask)
      .then((response) => {
        if (response.status === 201) {
          props.fetchAndPrint()
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }))

  return (
    <div className="addtaskContainer">
      <form
        className={useStyles.root}
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
      >
        <div className="addtaskGridContainer">
          <TextField
            id="title-input"
            label="Task Name"
            // type="email"
            autoComplete=""
            variant="outlined"
            onChange={changeTitle}
            value={inputTitle}
          />
          <TextField
            id="content-input"
            label="Content"
            // type=""
            autoComplete=""
            variant="outlined"
            onChange={changeContent}
            value={inputContent}
          />
          <Button
            variant="contained"
            color="primary"
            type="submit"
            /* onClick={postTask} */
          >
            Add Task
          </Button>
        </div>
      </form>
    </div>
  )
}
