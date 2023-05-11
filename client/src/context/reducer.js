import React from 'react'
import {REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER, ADD_TASK_BEGIN, ADD_TASK_SUCCESS, ADD_TASK_ERROR, GET_ALL_TASKS} from './action.js'

const reducer = (state, action) => {

  if(action.type === REGISTER_USER_BEGIN){
    return {...state, isLoading: true}
  }

  if(action.type === REGISTER_USER_SUCCESS){
    return {...state, isLoading: false, token: action.payload.token, user: action.payload.user}
  }

  if(action.type === REGISTER_USER_ERROR){
    return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg, alertType: "danger"}
  }

  if(action.type === LOGIN_USER_BEGIN){
    return {...state, isLoading: true,}
  }

  if(action.type === LOGIN_USER_SUCCESS){
    return {...state, isLoading: false, token: action.payload.token, user: action.payload.user, showAlert: true, alertText: 'Login Successful! Redirecting...', alertType: "success"}
  }

  if(action.type === LOGIN_USER_ERROR){
    return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg, alertType: "danger"}
  }

  if(action.type === LOGOUT_USER){
    return {...state, user: '',}
  }

  if(action.type === ADD_TASK_BEGIN){
    return {...state, isLoading: true, task: action.payload}
  }

  if(action.type === ADD_TASK_SUCCESS){
    return {...state, isLoading: false, showAlert: true, alertType: 'success', alertText: 'New Task Created!', task:''}
  }

  if(action.type === ADD_TASK_ERROR){
    return {...state, isLoading: false, showAlert: true, alertText: action.payload.msg, alertType: "danger"}
  }

  if(action.type === GET_ALL_TASKS){
    return {...state, tasks: action.payload}
  }




  return state
}

export default reducer