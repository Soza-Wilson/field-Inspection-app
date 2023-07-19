import db from '../util/database';
class Variety {
  constructor(variety_id, variety, crop_id) {
    (variety_id = this.variety_id),
      (variety = this.variety),
      (crop_id = this.crop_id);
  }

  createCrop() {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO variety (variety_id,variety,crop_id) VALUES (?,?,?)',
        [this.variety_id, this.variety,this.crop_id],
        (tx, result) => {
          console.log('Variety inserted with ID:', result.insertId);
        },
        error => {
          console.log('Failed to insert variety:', error);
        },
      );
    });
  }
}

export default Variety;
