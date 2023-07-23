import { Children, createContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { boolean } from "yup";


interface loginContext {
    /** Unique id of the item */
  
}
const loginContext = React.createContext<loginContext | boolean>(
    boolean
);



const logInProvider = ({ children }: { children: any }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return (
        <loginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </loginContext.Provider>
    )
}

export default logInProvider