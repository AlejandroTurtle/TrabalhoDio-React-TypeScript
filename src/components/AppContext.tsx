import { createContext, useEffect, useState } from "react"
import { getAllLocalStorage } from "../services/storage"

interface IAppContext {
    user: string
    isLoggedIn: boolean
    setisLoggedIn: (isLoggedIn: boolean) => void
  }
   export const AppContext = createContext({} as IAppContext)
   export const AppContextProvider = ({children}: any) => {
    const [ isLoggedIn , setisLoggedIn] = useState<boolean>(false)

    const storage = getAllLocalStorage()

    useEffect(() => {
      if(storage){
        const { login } = JSON.parse(storage)
        setisLoggedIn(login)
      }
    }, [])

   

    const user = "Alejandro"

    return(
      <AppContext.Provider value={{user, isLoggedIn, setisLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }