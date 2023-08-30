import { Float } from "react-native/Libraries/Types/CodegenTypes"
import db from "../util/database"

class GeoLocation {
    inspection_id: string
    latitude: string
    longitude: string
    altitude: string
    accuracy: string
    speed: string

    constructor(inspection_id: string, latitude: string,
        longitude: string,
        altitude: string,
        accuracy: string,
        speed: string) {
        (this.inspection_id = inspection_id,

            this.latitude = latitude),
            (this.longitude = longitude),
            (this.altitude = altitude),
            (this.accuracy = accuracy),
            (this.speed = speed);

    }

    async registerGeoLocation () {

        try {
            const tx: any = await new Promise((resolve, reject) => {
                db.transaction((tx) => resolve(tx), reject);
              });
             
              const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO geo_location (inspection_id,latitude,longitude,accuracy,speed) VALUES (?,?,?,?,?)',
                  [this.inspection_id, this.latitude, this.longitude, this.accuracy,this.speed],
                  (tx: any, results: any) => resolve([results,console.log("geo location inserted with ID ",this.inspection_id)]),
                  (_: any, error: any) => reject(error)
                );
              });
        } catch (error) {

            console.log(error)
            
        }
       
    }

}


export default GeoLocation