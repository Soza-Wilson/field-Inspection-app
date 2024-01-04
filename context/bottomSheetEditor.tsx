import { Children, createContext, useContext, useState } from "react";
import { View, Text } from 'react-native'
import React from 'react'
import { boolean } from "yup";


interface showBottomSheetContext {
    /** Unique id of the item */

}
const editBottomSheetStatusContext = React.createContext<showBottomSheetContext| boolean>(
    boolean
);



const BottomSheetContextStatusProvider = ({ children }: { children: any }) => {
    const [bottomSheetStatus,  setBottomSheetStatus] = useState(false)
    return (
        <editBottomSheetStatusContext.Provider value={{ bottomSheetStatus, setBottomSheetStatus }}>
            {children}
        </editBottomSheetStatusContext.Provider>
    )
}
export const UseBottomSheetProvider = () => useContext(editBottomSheetStatusContext)
export default BottomSheetContextStatusProvider