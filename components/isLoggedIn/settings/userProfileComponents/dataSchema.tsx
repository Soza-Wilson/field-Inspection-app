import { View, Text } from 'react-native'
import React from 'react'
import { object, string } from 'yup'

export const nameSchema = object().shape({

    // Define your form fields and their validation rules here
    // For example:

    name: string().required('New name  is required'),
  
    // Add more fields and their validations as needed


})

export const emailSchema = object().shape({

    email: string().email('Invalid email').required('Email is required'),
  

})

export const passwordSchema = object().shape({

   currentPassword: string().required('Current password is required'),
    newPassword: string().required('New Password is required'),
    repeatPassword: string().required('Repeated Password is required'),
    


})


