import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Collapse from '@material-ui/core/Collapse'

import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'

import IconButton from '@material-ui/core/IconButton'

import AssignmentIcon from '@material-ui/icons/Assignment'

import HighlightOffIcon from '@material-ui/icons/HighlightOff'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {},
}))

export default function NestedListItem(props) {
  const [open, setOpen] = React.useState(false)

  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="listItemDeleteContainer">
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary={props.title} />
        {props.open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={useStyles.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary={props.content} />
          </ListItem>
        </List>
      </Collapse>

      <IconButton
        className="listItemDelete"
        variant="contained"
        color="primary"
        onClick={() => props.removeTask(props._id)}
        style={{
          border: 'none',

          backgroundColor: '#D31E1A',
          color: 'white',
        }}
      >
        <HighlightOffIcon />
      </IconButton>
    </div>
  )
}
