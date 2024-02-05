import AsyncStorage from "@react-native-async-storage/async-storage";
import user from "./user";
import Crop from "./crop";
import Variety from "./variety";
import Grower from "./grower";
import Farm from "./farm";
const hostUrl = "https://10db-137-115-0-8.ngrok-free.app";

export

    class ApiHandler {


    checkConnection = async (): Promise<boolean> => {
        try {
            const response = await fetch(hostUrl + '/requests/connection');
            const jsonData = await response.json();

            if (jsonData[0].status === 'connected') {
                return true;
            } else {
                return false;
            }
        } catch (error) {
            console.log(error);
            return false; // Handle errors appropriately
        }
    };



    apiSignIn = async (userName: string, key: string): Promise<object | boolean> => {
        try {
            const response = await fetch(hostUrl + '/auth/logIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    user_name: userName,
                    key: key
                })
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            const apiData = {
                hostId: jsonData.clientId,
                userName: userName,
                key: key,
                token: jsonData.token
            };
            this.registerHost(apiData);
            return apiData;
        } catch (error) {
            console.log("Error during API sign-in:", error);
            return false;
        }
    };


    registerHost = async (hostData: Object) => {

        try {
            const jsonValue = JSON.stringify(hostData);
            await AsyncStorage.setItem('host-data', jsonValue);
        } catch (e) {
            console.log(e)
        }

    }

    getApiRegisteredData = async (): Promise<object | boolean> => {

        let parsedData: any = {};
        try {
            const value: string | null = await AsyncStorage.getItem('host-data');
            if (value) {

                parsedData = JSON.parse(value);
                return parsedData
            }
        } catch (error) {
            console.log('Error fetching data:', error);

        }
        return parsedData

    }




    async getUsers() {

        let counter = 0;

        try {
            const response = await fetch(hostUrl + '/requests/getUsers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            jsonData.forEach((element: any) => {
                const User = new user(
                    element.id,
                    element.fullname,
                    element.email,
                    element.password,
                )
                counter++;
                User.registerUser();
            });
            if (counter == jsonData.length) {
                console.log(counter + " Users Registered")
            }

        } catch (error) {
            console.log(error);
        }
    }





    async getCrops() {
        let counter = 0;
        try {
            const response = await fetch(hostUrl + '/requests/getCrops', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            jsonData.forEach((element: any) => {

                const crop = new Crop(element.crop_id, element.crop_name);
                crop.createCrop();
                counter++;
            })

            if (counter == jsonData.length) {
                console.log("Added " + counter + " Crop spicies")
            }
        } catch (error) {
            console.log(error);
        }
    }





    async getVarieties() {

        let counter = 0;

        try {

            const response = await fetch(hostUrl + '/requests/getVarieties', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            jsonData.forEach((element: any) => {
                const variety = new Variety(element.variety_id, element.variety_name, element.cropCrop_id);
                variety.createVariety()
                // checking if all entries have been passed to the create crop class if so move to the next function( insert variety data)
                counter++;
                if (counter == jsonData.length) {
                    console.log("Added " + counter + " Varieties")
                }
            });

        } catch (error) {

            console.log(error)

        }

    };




    async getGrowers() {

        let counter = 0;
        try {

            const response = await fetch(hostUrl + '/requests/getGrowers', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            jsonData.forEach((element: any) => {
                const grower = new Grower(element.grower_id, element.fullname, element.email);
                grower.createGrower()
                // checking if all entries have been passed to the create crop class if so move to the next function( insert variety data)
                counter++;
                if (counter == jsonData.length) {
                    console.log("Added " + counter + " Growers")
                }
            });

        } catch (error) {

            console.log(error)
        }

    };



    async getFarms() {
        let counter = 0;
        try {

            const response = await fetch(hostUrl + '/requests/getFarms', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            const jsonData = await response.json();
            jsonData.forEach((element: any) => {
                const farm = new Farm(element.farm_id, element.hectors, element.region, element.district,
                    element.area_name, element.physical_address,
                    element.address, element.epa, element.cropCropId, element.varietyVarietyId, element.growerGrowerId);
                farm.createFarm()
                // checking if all entries have been passed to the create crop class if so move to the next function( insert variety data)
                counter++;
                if (counter == jsonData.length) {
                    console.log("Added " + counter + " Registered farm")
                }
            });

        } catch (error) {
            console.log(error)

        }

    };
}


export default ApiHandler;