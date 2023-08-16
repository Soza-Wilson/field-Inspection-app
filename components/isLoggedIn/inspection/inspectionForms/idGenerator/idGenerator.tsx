import { View, Text } from 'react-native'
import React from 'react'

const idGenerator = () => {

            let code = "INSP";
            const characters = "1234567890";
            for (let i = 0; i < 8; i++) {
                code += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            return code
}

export default idGenerator