import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'



interface inpspectionTypeContext {
    type : string

}
const inspectionTypeContext = React.createContext<inpspectionTypeContext | any>(
   null
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