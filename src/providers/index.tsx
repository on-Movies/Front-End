import { ReactNode, createContext } from "react"
import {MovieProvider} from './movie.context';

interface iContextProps {
    children: ReactNode
  }
  
  export const Context = createContext({})
  
  export const Provider = ({ children }: iContextProps) => {
    return (
        <MovieProvider>
            {children}
        </MovieProvider>
    )
  }