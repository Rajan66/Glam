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

  useEffect(() => {
    dispatch(getUsers())
  }, [])

  return (
    <div className='mt-10'>
      <div class="flex items-center border border-gray-300 rounded-md">
      <input type="text" class="py-2 px-4 rounded-l-md focus:outline-none focus:ring focus:border-blue-300 flex-grow" placeholder="Email goes here..." />
        <button class="py-2 px-4 cursor-pointer bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300">
          Add Moderator
        </button>
      </div>
      <div style={{ display: "block" }}>
        <div class="relative overflow-x-auto my-4">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  Name
                </th>
                <th scope="col" class="px-6 py-3">
                  Email
                </th>
                <th scope="col" class="px-6 py-3">
                  Role
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Edit Role</span>
                </th>
                <th scope="col" class="px-6 py-3">
                  <span class="sr-only">Delete</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => (

                  <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowra">
                      {user.name}
                    </th>
                    <td class="px-6 py-4">
                      {user.email}
                    </td>
                    <td class="px-6 py-4">
                      {user.role}
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit Role</a>
                    </td>
                    <td class="px-6 py-4 text-right">
                      <a href="#" style={{ textDecoration: 'none' }} class="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Delete</a>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default User