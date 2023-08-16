import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    formContainer: {
        borderWidth: 0.3, borderColor: "grey", margin: 5, borderRadius: 5, height: 500

    },

    saveButton: {

        padding: 25,
        margin: 5,
        marginTop: 40,
        borderRadius: 5,
        backgroundColor: "#2DA15F",

    },
    saveText: {

        textAlign: "center",
        fontFamily: "Poppins-SemiBold",
        fontSize: 12,
        color: "#FFFFFF"




    },

    validationText: {
        fontFamily: 'Poppins-SemiBold',
        fontSize: 10,
        color: '#FF0000',


    },

    headerWrapper: {
        padding: 20,

        flexDirection: "row",
        justifyContent: "space-between"

    },

    backButton: {

        padding: 10,
        borderRadius: 10,

        backgroundColor: "white",
        elevation: 2,
        borderColor: "grey"

    },
    titleWrapper: {


        flexDirection: "column",
        padding: 20,

    },
    heading: {

        fontFamily: "Poppins-Medium",
        color: "black",
        fontSize: 15,
    },
    title: {

        fontFamily: "Poppins-Medium",
        color: "grey",
        fontSize: 13,


    },

    textWrapper: {
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: 10,


    },


    labelText: {

        fontFamily: "Poppins-Medium",
        fontSize: 11,
        textAlign: "left",
        color: "black"
    },

    userInput: {

        backgroundColor: 'rgb(247,247,249)',
        borderRadius: 5,
        borderColor: "grey",



    },
    remarks: {

        height: 100, textAlignVertical: 'top',
        backgroundColor: 'rgb(247,247,249)',
        borderRadius: 5,
        borderColor: "grey",




    }








})