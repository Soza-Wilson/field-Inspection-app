import db from '../util/database';



class Crop {
  crop_id: string
  crop: string
  constructor(crop_id: string, crop: string) {
    (this.crop_id = crop_id), (this.crop = crop);
  }


  createCrop() {
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
