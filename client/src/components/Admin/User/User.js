import React, { useEffect } from 'react'
import './User.css'
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
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr>
                <td>
                  <Grid key={user._id} item >
                    <div style={{ display: "flex", padding: "20px" }}>
                      <p>{user.uid}</p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <p>{user.name}</p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <p>{user.email}</p>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <p>{user.role}</p>
                      <div className='icon'>
                        <IconButton color='primary' >
                          <UpdateIcon />
                        </IconButton>
                        <IconButton color='primary'  >
                          <DeleteIcon />
                        </IconButton>
                      </div>
                    </div>
                  </Grid>
                </td>
              </tr>
            ))}
        </tbody>

      </table>

    </div>
  )
}

export default User