import AsyncStorage from "@react-native-async-storage/async-storage";
const hostUrl = "https://b29c-137-196-0-5.ngrok-free.app";

 const registerHost = async (hostData: Object) => {

    try {
        const jsonValue = JSON.stringify(hostData);
        await AsyncStorage.setItem('host-data', jsonValue);
    } catch (e) {
        console.log(e)
    }

}

export const apiSignIn = (userName: string, key: string) => {

    fetch(hostUrl + '/auth/logIn', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify({
            user_name: userName,
            key: key
        })
    })
        .then(res => res.json())
        .then(jsonData => {
            const apiData = {
                hostId: jsonData.clientId,
                userName: userName,
                key: key,
                token: jsonData.token
            }
            console.log(apiData)
            registerHost(apiData)
        })
        .catch(error => {
            console.log(error);
        });

}
