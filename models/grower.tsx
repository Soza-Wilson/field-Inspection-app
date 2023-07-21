import db from '../util/database';


class Grower {
  grower_id:string 
  fullname:string
  email:string

  constructor(grower_id :string, fullname :string, email:string) {
    ( this.grower_id = grower_id),
      (this.fullname = fullname),
      (this.email = email);
  }

  createGrower (){

    db.transaction(tx => {
        tx.executeSql(
          'INSERT INTO growers (grower_id,fullname,email) VALUES (?,?,?)',
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
