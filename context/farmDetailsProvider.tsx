import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { boolean, number, string } from "yup";


interface inpspectionFarmIdContext {
    type : string

}
const farmIdContext = React.createContext<inpspectionFarmIdContext | any>(
    string
);



const SelectedInspectionFarmId = ({ children }: { children: any }) => {
    const [farmId, setFarmId] = useState(null)
    return (
        <farmIdContext.Provider value={{ farmId, setFarmId }}>
            {children}
        </farmIdContext.Provider>
    )
}
export const useInspectionfarmId = () => useContext(farmIdContext)
export default SelectedInspectionFarmId
