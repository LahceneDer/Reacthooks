import { createContext } from 'react'

export type UserState = typeof initialState

const initialState = {
    first: "fname",
    last: "lname"
}

export const context = createContext<typeof initialState>(initialState)