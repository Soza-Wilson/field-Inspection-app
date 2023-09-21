import { View, Text, Alert } from 'react-native'
import React from 'react'
import db from '../util/database'
import AsyncStorage from '@react-native-async-storage/async-storage'

class Inspection {
    id: string
    userId: string
    farmId: string
    inspectionDate: any
    inspectionTime: any
    inspectionType: string
    isolationDistance: number
    plantingPattern: string
    offTypePercentage: number
    pestDiseaseIncidence: number
    defectPlants: number
    pollinatingFemales: number
    femaleReceptiveSkills: number
    maleElemination: number
    offTypeCobsAtShelling: number
    defectiveCobsAtShelling: number
    remarks: string





    constructor(id: string, userId: string,
        farmId: string,
        inpectionDate: number,
        inspectionTime: number,
        inspectionType: string,
        isolationDistance: number,
        plantingPattern: string,
        offTypePercentage: number,
        pestDiseaseIncidence: number,
        defectPlants: number,
        pollinatingFemales: number,
        femaleReceptiveSkills: number,
        maleElemination: number,
        offTypeCobsAtShelling: number,
        defectiveCobsAtShelling: number,
        remarks: string) {
        (this.id = id),
            (this.userId = userId),
            (this.farmId = farmId),
            (this.inspectionDate = inpectionDate),
            (this.inspectionTime = inspectionTime),
            (this.inspectionType = inspectionType),
            (this.isolationDistance = isolationDistance),
            (this.plantingPattern = plantingPattern),
            (this.offTypePercentage = offTypePercentage),
            (this.pestDiseaseIncidence = pestDiseaseIncidence),
            (this.defectPlants = defectPlants),
            (this.pollinatingFemales = pollinatingFemales),
            (this.femaleReceptiveSkills = femaleReceptiveSkills),
            (this.maleElemination = maleElemination),
            (this.offTypeCobsAtShelling = offTypeCobsAtShelling),
            (this.defectiveCobsAtShelling = defectiveCobsAtShelling),
            (this.remarks = remarks);


    }
    //   '(inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,isolation_distance,planting_pattern,off_type_percentange,pest_disease_incidence,defective_plants,pollinating_females_percentage,female_receptive_skills,male_elemination,off_typecobs_at_shelling,remarks)',



    //vergitative inspection is for all types, but some data is specific for maize hybrid varieties. such as planting pattern and isolation distance

    addVergitativeInspection = async () => {

                     

    

        try {

            db.transaction(async tx => {
                const results: any = await new Promise((resolve, reject) => {
                    tx.executeSql(
                        'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,isolation_distance,planting_pattern,off_type_percentage,pest_disease_incidence,defective_plants,inspection_remarks) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)',
                        [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType, this.isolationDistance, this.plantingPattern, this.offTypePercentage, this.pestDiseaseIncidence,this.defectPlants, this.remarks],
                        (tx, result) => {
                            console.log('Data inserted. ID' + this.id)
                            return 'successful'

                        },
                        error => {
                            console.log('Failed to insert inspection details :', error);
                            return 'error'
                        },
                    );
                })

            });

        } catch (error) {

            console.log(error)

        }



    }

    addFloweringInspection = async () => {

        // at this stage data being inserted into the database will depend on the type crop and variety ( some of the information being collected is based on Maize hybrid , so it will depend if its hybrid maize or not )

        db.transaction(async tx => {



            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,pollinating_females_percentage,female_receptive_skills,male_elemination,pest_disease_incidence,inspection_remarks) VALUES(?,?,?,?,?,?,?,?,?,?,?)',
                    [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType, this.pollinatingFemales, this.femaleReceptiveSkills, this.maleElemination, this.pestDiseaseIncidence, this.remarks],


                    (tx, result) => {
                        console.log('Flowering inspection details inserted with ID:', this.id);
                        console.log(result)

                        // const len = result.rows.length;
                        // if (len > 0) {

                        //     for (let index = 0; index < result.rows.length; index++) {
                        //         console.log(index)

                        //     }
                        // }

                    },
                    error => {
                        console.log('Failed to insert inspection details :', error);
                    },
                );
            })

        });


    }

    // addPreHarvestInspection() {

    //     // Pre harvest inspection is only done for maize seed, for now since the app is based on Multi seeds operations , but this will be changed after finding how other companies do their operations 

    //     db.transaction(tx => {
    //         tx.executeSql(
    //             'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,off_typecobs_at_shelling,defective_cobs_at_shelling,remarks) VALUES(?,?,?,?,?,?,?,?,?)',
    //             [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType, this.offTypeCobsAtShelling, this.defectiveCobsAtShelling, this.remarks],
    //             (tx, result) => {
    //                 console.log('Pre-Harvest inspection details inserted with ID:', this.id);
    //             },
    //             error => {
    //                 console.log('Failed to insert inspection details :', error);
    //             },
    //         );
    //     });






    // }



    addPreHarvestInspection = async () => {

        // at this stage data being inserted into the database will depend on the type crop and variety ( some of the information being collected is based on Maize hybrid , so it will depend if its hybrid maize or not )

        db.transaction(async tx => {



            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,off_typecobs_at_shelling,defective_cobs_at_shelling,inspection_remarks) VALUES(?,?,?,?,?,?,?,?,?)',
                    [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType, this.offTypeCobsAtShelling, this.defectiveCobsAtShelling, this.remarks],


                    (tx, result) => {
                        console.log('Pre harvest inspection details inserted with ID:', this.id);
                        console.log(result)

                        // const len = result.rows.length;
                        // if (len > 0) {

                        //     for (let index = 0; index < result.rows.length; index++) {
                        //         console.log(index)

                        //     }
                        // }

                    },
                    error => {
                        console.log('Failed to insert inspection details :', error);
                    },
                );
            })

        });


    }


    checkInspectionTable() {
        console.log("working")

        db.transaction(tx => {
            tx.executeSql(
                'SELECT * FROM inspection',
                [],
                (tx, result) => {
                    const len = result.rows.length;
                    if (len > 0) {

                        for (let index = 0; index < result.rows.length; index++) {
                            console.log(result.rows.item(0))

                        }
                        // Sign-in success code here

                        // const userData = {
                        //     id: results.rows.item(0).id,
                        //     fullName: results.rows.item(0).name,
                        //     profilePicture: results.rows.item(0).profile_picture
                        // }

                    }
                    else {

                        console.log("inspection table is empty")
                    }
                },


                error => {
                    console.log('Failed to insert inspection details :', error);
                },
            );
        });



    }


    // this method is getting the farm id and inspection type parsed to the modal 
    // will return an object containing inspection data of the specific inspection type 

    async getInspectionData() {

        try {

            const tx: any = await new Promise((resolve, reject) => {
                db.transaction((tx) => resolve(tx), reject);
            });

            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'SELECT * FROM inspection WHERE farm_id=? AND inspection_type=?',
                    [this.farmId, this.inspectionType],
                    (tx: any, results: any) => resolve(results),
                    (_: any, error: any) => reject(error)
                );
            });

            const len = results.rows.length;
            if (len >= 1) {

                //reserting data tocken before adding new tocken

                try {
                    await AsyncStorage.removeItem('' + this.inspectionType + '-inspection-data')
                } catch (error) {
                    console.log(error)
                }
                // parsing results data into aysnc await function 

                try {

                    // extracting data fetch    ed from the database and parsing it to an object 
                    // const jsonValue = JSON.stringify(getSqlObjectdata);
                    // await AsyncStorage.setItem(''+this.inspectionType+'-inspection-data', jsonValue)

                    const data = results.rows.item(0)

                    return data

                } catch (e) {
                    console.log(e)
                }
                console.log("found " + len + " inspection entries");
                //   storeUserData(userData)

                //   setIsLoggedIn(true)
            } else {
                // Sign-in failure code here
                console.log('no data found ')

            }
        } catch (error) {
            // Error handling code here
            console.error("Error during sign-in:", error);
        }






    }

    deleteInspection = async () => {


        try {

            const tx: any = await new Promise((resolve, reject) => {
                db.transaction((tx) => resolve(tx), reject);
            });

            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'DELETE * FROM inspection',
                    [],
                    (tx: any, results: any) => resolve(results),
                    (_: any, error: any) => reject(error)
                );
            });

        } catch (error) {
            console.log(error)

        }





    }

}

export default Inspection