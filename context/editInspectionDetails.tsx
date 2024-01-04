import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { boolean } from "yup";


interface editEditDataContext {
    /** Unique id of the item */

}
const editDataContext = React.createContext<editEditDataContext| []>(
    []
);



const EditDataProvider = ({ children }: { children: any }) => {
    const [inspectionData,  setInspectionData] = useState([])
    return (
        <editDataContext.Provider value={{ inspectionData, setInspectionData }}>
            {children}
        </editDataContext.Provider>
    )
}
export const UseEditDataContext = () => useContext(editDataContext)
export default EditDataProvider