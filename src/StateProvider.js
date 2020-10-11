import React, { createContext, useContext, useReducer} from 'react'

// preparing datalayer
export const StateContext = createContext()

export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer(reducer,initialState)}>
        {children}
    </StateContext.Provider>
)

// hook which allows us to pull information from datalayer
export const useStateValue=()=>useContext(StateContext)