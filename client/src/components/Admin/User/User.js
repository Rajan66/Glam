import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../../actions/user'

import { Grid, IconButton } from '@mui/material'
import DeleteIcon from "@mui/icons-material/Delete"
import UpdateIcon from "@mui/icons-material/Edit"

const User = () => {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)
  console.log(users)

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div style={{ display: "block" }}>
      {users.map((user) => (
        <Grid key={user._id} item >
          <div style={{ display: "flex", padding: "20px" }}>
            <p>{user.name}</p>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>{user.email}</p>
            <IconButton color='primary' >
              <UpdateIcon />
            </IconButton>
            <IconButton color='primary'  >
              <DeleteIcon />
            </IconButton>
          </div>
        </Grid>
      ))}
    </div>
  )
}

export default User