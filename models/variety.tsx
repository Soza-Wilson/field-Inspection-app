import db from '../util/database';
class Variety {
  variety_id: string
  variety: string
  crop_id: string
  constructor(variety_id: string, variety: string, crop_id: string) {
    (this.variety_id = variety_id),
      (this.variety = variety),
      (this.crop_id = crop_id);
  }

  createVariety() {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO variety (variety_id,variety,crop_id) VALUES (?,?,?)',
        [this.variety_id, this.variety, this.crop_id],
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
