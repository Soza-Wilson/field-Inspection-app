import db from '../util/database';

class Grower {
  constructor(grower_id, fullname, email) {
    (grower_id = this.grower_id),
      (fullname = this.fullname),
      (email = this.email);
  }

  createCrop (){

    db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO grower (grower_id,fullname,email) VALUES (?,?,?)',
          [this.grower_id, this.fullname,this.email],
          (tx, result) => {
            console.log('Growers inserted with ID:', result.insertId);
          },
          error => {
            console.log('Failed to insert growers:', error);
          },
        );
      });
 }
}

export default Grower;
