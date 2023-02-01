import { CALL_API } from '../../middleware/api'

export const USER = 'USER'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

export const GET_USER_SUCCESS = 'GET_USER_SUCCESS'
export const SEND_USER_SUCCESS = 'SEND_USER_SUCCESS'
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'

export const DELETE_USERS = 'DELETE_USERS'
export const DELETE_USERS_SUCCESS = 'DELETE_USERS_SUCCESS'
export const DELETE_USERS_FAILURE = 'DELETE_USERS_FAILURE'

export const listUser = params => ({
  [CALL_API]: {
    types: [ USER, USER_SUCCESS, USER_FAILURE ],
    endpoint: `users${params}`,
    method: 'GET',
  }
})
export const getUserById = params => ({
  [CALL_API]: {
    types: [ USER, GET_USER_SUCCESS, USER_FAILURE ],
    endpoint: `users${params}`,
    method: 'GET',
  }
})
export const sendUser = data => ({
  [CALL_API]: {
    types: [ USER, SEND_USER_SUCCESS, USER_FAILURE ],
    endpoint: `users`,
    data,
    method: 'POST',
  }
})
export const updateUser = data => ({
  [CALL_API]: {
    types: [ USER, UPDATE_USER_SUCCESS, USER_FAILURE ],
    endpoint: `users/${data.id}`,
    data,
    method: 'PUT',
  }
})

export const deleteUsers = data => ({
  [CALL_API]: {
    types: [ DELETE_USERS, DELETE_USERS_SUCCESS, DELETE_USERS_FAILURE ],
    endpoint: `users`,
    data,
    method: 'DELETE',
  }
})

