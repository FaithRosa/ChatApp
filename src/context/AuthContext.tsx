import { useMutation } from "@tanstack/react-query";
import { ReactNode, createContext,useContext } from "react";
import axios from 'axios';

type AuthContext = {

}

type User = {
    id: string
    name: string
}

const Context = createContext<AuthContext | null>(null)

export function useAuth() {
    return useContext(Context)
}

type AuthProviderProps = {
    children:ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
    const signup = useMutation({
        mutationFn: (user: User) => {
            return axios.post(`${import.meta.env.VITE.SERVER.URL}/signup`, user)
        }
    })
    return <Context.Provider value={{}}>
        { children}
    </Context.Provider>
}