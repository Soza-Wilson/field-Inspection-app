import { Alert } from 'react-native';
import db from '../util/database';
import { UseLogIn } from '../context/logInProvider';

//  user class resposible for hundling al user processes, these include check id and register new user

class user {
  id: string
  fullname: string
  email: string
  password: string
  result: any

  constructor(id: string, fullname: string, email: string, password: string) {
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

  async signIn() {
    try {
     
      const tx: any = await new Promise((resolve, reject) => {
        db.transaction((tx) => resolve(tx), reject);
      });
     
      const results: any = await new Promise((resolve, reject) => {
        tx.executeSql(
          'SELECT * FROM users WHERE email=? AND password=?',
          [this.email, this.password],
          (tx: any, results: any) => resolve(results),
          (_: any, error: any) => reject(error)
        );
      });

      const len = results.rows.length;
      if (len === 1) {
        // Sign-in success code here
        console.log("Sign-in successful");
       
       
      } else {
        // Sign-in failure code here

        Alert.alert("Invalid email or password")
      }
    } catch (error) {
      // Error handling code here
      console.error("Error during sign-in:", error);
    }
  }

  checkTables() {
    db.transaction(tx => {
      tx.executeSql('SHOW TABLES', [], (tx, results) => {
        let len = results.rows.length;
        if (len > 0) {
          for (let i = 0; i < len; i++) {
            return (results.rows.item(i));
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
