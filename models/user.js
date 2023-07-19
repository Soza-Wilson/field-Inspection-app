import db from '../util/database';

//  user class resposible for hundling al user processes, these include check id and register new user

class user {
  constructor(id, fullname, email, password) {
    (this.id = id),
      (this.fullname = fullname),
      (this.email = email),
      (this.password = password);
  }

  registerUser() {
    db.transaction(tx => {
      tx.executeSql(
        'INSERT INTO users (id,name,email,password) VALUES (?,?,?,?)',
        [this.id, this.fullname, this.email, this.password],
        (tx, result) => {
          console.log('User inserted with ID:', result.insertId);
        },
        error => {
          console.log('Failed to insert user:', error);
        },
      );
    });
  }

  checkTables() {
    db.transaction(tx => {
      tx.executeSql('SHOW TABLES', [], (tx, results) => {
        let len = results.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            console.log(results.rows.item(i));
          }
        }
      });
    });
  }

  dropTable() {
    db.transaction(tx => {
      tx.executeSql('DROP TABLE IF EXISTS users', [], result => {
        console.log(result);
      });
    });
  }
}
export default user;
