import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import ListSubheader from '@material-ui/core/ListSubheader'
import List from '@material-ui/core/List'

import NestedListItem from './NestedListItem.js'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    /* paddingLeft: theme.spacing(4), */
  },
}))

export default function NestedList(props) {
  const classes = useStyles()

  return (
    <>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Tasks
          </ListSubheader>
        }
        className={classes.root}
      >
        {props.tasks.map((task) => (
          <div key={task._id}>
            <NestedListItem
              title={task.title}
              content={task.content}
              _id={task._id}
              removeTask={props.removeTask}
            />
          </div>
        ))}

        {/*<NestedListItem handleClick={handleClick} open={open} />  */}
      </List>
    </>
  )
}
