import { PermissionsAndroid } from "react-native/Libraries/PermissionsAndroid/PermissionsAndroid";

export const requestCameraPermission = async () => {
    try {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.CAMERA,
            {
                title: "App Camera Permission",
                message: "App needs access to your camera ",
                buttonNeutral: "Ask Me Later",
                buttonNegative: "Cancel",
                buttonPositive: "OK"
            }
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {

            return true
        } else {

            return false
        }
    } catch (err) {
        console.log(err);
    }
};