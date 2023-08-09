import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { boolean, number, string } from "yup";


interface inpspectionTypeContext {
    type : string

}
const inspectionTypeContext = React.createContext<inpspectionTypeContext | any>(
    string
);



const SelectedInspectionType = ({ children }: { children: any }) => {
    const [inspectionType, setInspectionType] = useState(null)
    return (
        <inspectionTypeContext.Provider value={{ inspectionType, setInspectionType }}>
            {children}
        </inspectionTypeContext.Provider>
    )
}
export const useInspectionType = () => useContext(inspectionTypeContext)
export default SelectedInspectionType