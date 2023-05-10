import React, {createContext, useContext, useReducer} from 'react'
import reducer from './reducer'


const initialState = {
    name: "KKKedar",
}

const AppContext = createContext()

const AppProvider = ({children}) =>{

    const [state, dispatch] = useReducer(reducer, initialState)

    return(
        <AppContext.Provider value={{...state}}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppcontext = () =>{
    return useContext(AppContext)
}

export default AppProvider