import { createContext, useState } from "react"

interface IAppContext {
    user: string
    isLoggedIn: boolean
    setisLoggedIn: (isLoggedIn: boolean) => void
  }
   export const AppContext = createContext({} as IAppContext)
   export const AppContextProvider = ({children}: any) => {
    const [ isLoggedIn , setisLoggedIn] = useState<boolean>(false)

    const user = "Alejandro"

    return(
      <AppContext.Provider value={{user, isLoggedIn, setisLoggedIn}}>
        {children}
      </AppContext.Provider>
    )
  }