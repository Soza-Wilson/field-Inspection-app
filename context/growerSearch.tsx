import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { string } from "yup";



interface growerNameContext {
    type : string

}
const growerNameContext = React.createContext<growerNameContext | any>(
  string
);



const SelectedGrowerName = ({ children }: { children: any }) => {
    const [growerName, setGrowerName] = useState(null)
    return (
        <growerNameContext.Provider value={{ growerName, setGrowerName }}>
            {children}
        </growerNameContext.Provider>
    )
}
export const useInspectionType = () => useContext(growerNameContext)
export default SelectedGrowerName