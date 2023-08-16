import { View, Text } from 'react-native'
import React from 'react'
import db from '../util/database'

class Inspection {
    id: string
    userId: string
    farmId: string
    password: string
    inspectionDate: Date
    inspectionTime: Date
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
    defectiveCobsAtShelling:number
    remarks: string





    constructor(id: string, userId: string,
        farmId: string, password: string,
        inpectionDate: Date,
        inspectionTime: Date,
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
            (this.password = password),
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

    addVergitativeInspection() {

        db.transaction(tx => {
            tx.executeSql(
                'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,isolation_distance,planting_pattern,off_type_percentange,pest_disease_incidence,defective_plants,remarks) VALUES(????????????)',
                [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType, this.isolationDistance, this.plantingPattern, this.offTypePercentage, this.pestDiseaseIncidence, this.remarks],
                (tx, result) => {
                    console.log('vergitative inspection details inserted with ID:', this.id);
                },
                error => {
                    console.log('Failed to insert inspection details :', error);
                },
            );
        });

    }

  addFloweringInspection(){

    // at this stage data being inserted into the database will depend on the type crop and variety ( some of the information being collected is based on Maize hybrid , so it will depend if its hybrid maize or not )

    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,pollinating_females_percentage,female_receptive_skills,male_elemination,pest_disease_incidence,remarks) VALUES(???????????)',
            [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType,this.pollinatingFemales,this.femaleReceptiveSkills,this.maleElemination,this.pestDiseaseIncidence, this.remarks],
            (tx, result) => {
                console.log('Flowering inspection details inserted with ID:', this.id);
            },
            error => {
                console.log('Failed to insert inspection details :', error);
            },
        );
    });


  } 
  
  addPreHarvestInspection(){

    // Pre harvest inspection is only done for maize seed, for now since the app is based on Multi seeds operations , but this will be changed after finding how other companies do their operations 
   
    db.transaction(tx => {
        tx.executeSql(
            'INSERT INTO inspection (inspection_id,inspection_date,inspection_time,farm_id,user_id,inspection_type,off_typecobs_at_shelling,defective_cobs_at_shelling,remarks) VALUES(?????????)',
            [this.id, this.inspectionDate, this.inspectionTime, this.farmId, this.userId, this.inspectionType,this.offTypeCobsAtShelling,this.defectiveCobsAtShelling,this.remarks],
            (tx, result) => {
                console.log('Pre-Harvest inspection details inserted with ID:', this.id);
            },
            error => {
                console.log('Failed to insert inspection details :', error);
            },
        );
    });

   




  }

}

export default Inspection