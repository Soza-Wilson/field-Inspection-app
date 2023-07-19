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
    (farm_id = this.farm_id),
      (hectors = this.hectors),
      (region = this.region),
      (district = this.district),
      (area_name = this.area_name),
      (physical_address = this.physical_address),
      (address = this.address),
      (epa = this.epa),
      (crop_id = this.crop_id),
      (variety_id = this.variety_id),
      (grower_id = this.grower_id);
  }

  createFarm() {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO farm (farm_id,hectors,region_id,district,area_name,address,physical_address,address,epa,crop_id,variety_id,grower_id) VALUES (?,?,?)',
        [
          this.farm_id,
          this.hectors,
          this.region,
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
