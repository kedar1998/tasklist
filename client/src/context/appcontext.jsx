import React, {createContext, useContext, useEffect, useReducer} from 'react'
import reducer from './reducer'
import {REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR, LOGIN_USER_BEGIN, LOGIN_USER_SUCCESS, LOGIN_USER_ERROR, LOGOUT_USER, ADD_TASK_BEGIN, ADD_TASK_SUCCESS, ADD_TASK_ERROR, GET_ALL_TASKS, GET_ALL_TASK_ERROR} from './action'
import axios from 'axios'


const token = localStorage.getItem('token')
const user = localStorage.getItem('user')


const initialState = {
    isLoading: false,
    showAlert: false, 
    alertType: '', 
    alertText: '',
    // AUTHENTICATION
    user: user ? JSON.parse(user) : null,
    token: token || '',
    // TASKS
    task: '',
    tasks: [],

}

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)



    // custom instances && interceptors
    const authFetch = axios.create({
        baseURL: '/api/v1',
    })

    // REQUEST

    authFetch.interceptors.request.use((config) =>{

    config.headers['Authorization'] = `Bearer ${state.token}`
    return config
    }, 
    (error) =>{
        return Promise.reject(error)
    })

    // RESPONSE

    authFetch.interceptors.response.use((response) =>{
        return response
    },
    (error) =>{
        // if(error.response.status === 401){
        // // logoutUser()
        // }
        return Promise.reject(error)
    }
    )

    const addUserToLocalStorage = ({user,token,location}) =>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
      }
    
      const removeUserFromLocalStorage = () =>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
      }

    const registerUser = async (currentUser) =>{
        dispatch({type: REGISTER_USER_BEGIN})
        try{
          const response = await authFetch.post('/auth/register', currentUser)
          const {user, token} = response.data
          dispatch({type: REGISTER_USER_SUCCESS, payload: {user, token}})
          addUserToLocalStorage({user,token})
        }
        catch(err){
            console.log(err);
            dispatch({type: REGISTER_USER_ERROR, payload: { msg: err.response.data.msg}})
        }
        // clearAlert()
    }

    const loginUser = async (currentUser) =>{
        dispatch({type: LOGIN_USER_BEGIN})
        
        try{
            const response = await authFetch.post("/auth/login", currentUser)
            let {user, token} = response.data
            user = user.name
            dispatch({type: LOGIN_USER_SUCCESS, payload: {user, token}})
            addUserToLocalStorage({user,token})
        }
        catch(err){
            console.log(err);
            dispatch({type: REGISTER_USER_ERROR, payload: { msg: err.response.data.msg}})
        }
    }

    const logoutUser = () =>{
        dispatch({type: LOGOUT_USER})
        removeUserFromLocalStorage()
    }

    const addTask = async (name) =>{
        dispatch({type: ADD_TASK_BEGIN, payload: name})

        try{
            // const {task} = state

            await authFetch.post("/task", {
              name
            })
            dispatch({type: ADD_TASK_SUCCESS})
          }
          catch(err){
            dispatch({type: ADD_TASK_ERROR, payload: {msg: err.response.data.msg}})
          }
    }

    const getAllTasks = async () =>{
        try{
            const response = await authFetch.get("/task")
            dispatch({type: GET_ALL_TASKS, payload: response.data.task})
        }
        catch(err){
            dispatch({type: GET_ALL_TASK_ERROR, payload: {msg: err.response.data.msg}})
        }

    }

    useEffect(() =>{
        getAllTasks()
    }, [state.task])



    return(
        <AppContext.Provider value={{...state, registerUser, loginUser, logoutUser, addTask, getAllTasks}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppcontext = () =>{
    return useContext(AppContext)
}

export default AppProvider