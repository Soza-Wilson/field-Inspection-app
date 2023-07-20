import db from "../util/database";

class Farm {
  constructor(
    farm_id,
    hectors,
    region,
    district,
    area_name,
    physical_address,
    address,
    epa,
    crop_id,
    variety_id,
    grower_id,
  ) {
    (this.farm_id = farm_id),
      ( this.hectors = hectors),
      (this.region = region),
      (this.district =district),
      (this.area_name = area_name),
      (this.physical_address = physical_address),
      (this.address = address),
      (this.epa = epa),
      ( this.crop_id =crop_id),
      (this.variety_id = variety_id),
      (this.grower_id = grower_id );
  }

  createFarm() {
  
    db.transaction(tx => {
      tx.executeSql(
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
}

export default Farm;
