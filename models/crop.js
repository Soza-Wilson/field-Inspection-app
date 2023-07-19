import db from '../util/database';

class Crop {
  constructor(crop_id, crop) {
    (crop_id = this.crop_id), (crop = this.crop);
  }


 createCrop (){

    db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO crop (crop_id,crop) VALUES (?,?)',
          [this.crop_id, this.crop],
          (tx, result) => {
            console.log('Crop inserted with ID:', result.insertId);
          },
          error => {
            console.log('Failed to insert crop:', error);
          },
        );
      });
 }

}

export default Crop;
