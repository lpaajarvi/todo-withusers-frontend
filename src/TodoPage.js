import React, { useState, useEffect } from 'react'

import axios from 'axios'

import AddTask from './AddTask.js'

import backlist from './img/backlist.png'

import NestedList from './NestedList.js'

let host = ''
host = 'http://localhost:4000'

export default function TodoData(props) {
  const [tasks, setTasks] = useState([
    {
      _id: '',
      title: '',
      content: '',
    },
  ])

  useEffect(() => {
    fetchAndPrint()
  }, [])

  useEffect(() => {
    // console.log('Fetched')
  }, [tasks])

  function fetchAndPrint() {
    // console.log('' + props.userId)
    axios
      .get(host + '/app/tasks/' + props.userId)
      .then((fetched) => {
        updateTasks(fetched.data)
      })
      .catch(function (error) {
        console.log(error)
      })
  }

  function updateTasks(data) {
    const newArray = []

    for (let i = 0; i < data.length; i++) {
      let obj = {
        _id: data[i]._id,
        title: data[i].title,
        content: data[i].content,
      }
      newArray.push(obj)
    }

    setTasks(newArray)
  }

  async function removeTask(task_id) {
    // console.log(task_id)
    await axios.delete(host + '/app/tasks/' + task_id).catch(function (error) {
      if (error.response) {
        console.log(error.response.data)
        console.log(error.response.status)
        console.log(error.response.headers)
      }
    })
    fetchAndPrint()
  }

  return (
    <div className="todoPageContainer">
      <div
        className="todoPictureContainer"
        style={{
          backgroundImage: `url(${backlist})`,
          backgroundRepeat: 'no-repeat',
          height: '90vh',
        }}
      >
        <NestedList
          className="nestedTaskList"
          tasks={tasks}
          removeTask={removeTask}
        />

        <AddTask userId={props.userId} fetchAndPrint={() => fetchAndPrint()} />
      </div>
    </div>
  )
}
