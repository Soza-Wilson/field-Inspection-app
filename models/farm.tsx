import db from "../util/database";


type FarmProps = {

  farm_id: string,
  hectors: string,
  region: string,
  district: string,
  area_name: string,
  physical_address: string,
  address: string,
  epa: string,
  crop_id: string,
  variety_id: string,
  grower_id: string
}

class Farm {
  farm_id: String
  hectors: String
  region: String
  district: String
  area_name: String
  physical_address: String
  address: String
  epa: String
  crop_id: String
  variety_id: String
  grower_id: String

  constructor(
    farm_id: string,
    hectors: string,
    region: string,
    district: string,
    area_name: string,
    physical_address: string,
    address: string,
    epa: string,
    crop_id: string,
    variety_id: string,
    grower_id: string
  ) {
    (this.farm_id = farm_id),
      (this.hectors = hectors),
      (this.region = region),
      (this.district = district),
      (this.area_name = area_name),
      (this.physical_address = physical_address),
      (this.address = address),
      (this.epa = epa),
      (this.crop_id = crop_id),
      (this.variety_id = variety_id),
      (this.grower_id = grower_id);
  }

  createFarm() {

    console.log(this.farm_id)

    db.transaction(tx => {
      tx.executeSql(
        // 'INSERT INTO farms (farm_id,hectors,region_id,district,area_name,address,physical_address,address,epa,crop_id,variety_id,grower_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        'INSERT INTO farms (farm_id,hectors,region_id,district,area_name,address,physical_address,address,epa,crop_id,variety_id,grower_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          this.farm_id,
          this.hectors,
          this.region,
          this.district,
          this.area_name,
          this.district,
          this.address,
          this.physical_address,
          this.epa,
          this.crop_id,
          this.variety_id,
          this.grower_id,
        ],
        (tx, result) => {
          console.log('Farm inserted with ID:', result.insertId);
        },
        error => {
          console.log('Failed to insert farm:', error);
        },
      );
    });
  }

  getFarmDetails = async () => {

    //  this function  takes farm id and return farm details 
    //  The function is geting data from three tables Creditor,Farm,Crop and Variety

    try {

      const tx: any = await new Promise((resolve, reject) => {
        db.transaction((tx) => resolve(tx), reject);
      });

      const results: any = await new Promise((resolve, reject) => {
        tx.executeSql(
          'SELECT fullname,district,area_name,crop,variety FROM farms INNER JOIN growers ON growers.grower_id = farms.grower_id INNER JOIN crop ON crop.crop_id = farms.crop_id LEFT JOIN variety ON variety.variety_id = farms.variety_id WHERE farm_id=?',
          [this.farm_id],
          (tx: any, results: any) => resolve(results),
          (_: any, error: any) => reject(error)
        );
      });
      const len = results.rows.length;

      if (len > 0) {
        return results.rows.item(0)
      }
      else{
        return 'error'
      }
    } catch (error) {

      console.log(error);


    }




  }
}





export default Farm;
