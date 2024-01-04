import db from "../util/database";
class UploadedImages {
    image_uri : string
    inspection_id: string

    constructor(image_uri: string, inspection_id: string,
    ) {
        (this.inspection_id = inspection_id,
            this.image_uri = image_uri)



    }

    async addImage() {


        console.log(this.image_uri,this.inspection_id)

        db.transaction(async tx => {

            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO inspection_images (image_uri,inspection_id) VALUES(?,?)',
                    [this.image_uri, this.inspection_id],


                    (tx, result) => {
                        console.log('Flowering inspection details inserted with ID:', this.image_uri);
                        console.log(result)
                    },
                    error => {
                        console.log('Failed to insert inspection details :', error);
                    },
                );
            })

        });

    }

    async getImages(inspection_id: any) {

        let outPut: string[] = [];


        try {
            const tx: any = await new Promise((resolve, reject) => {
                db.transaction((tx) => resolve(tx), reject);
            });
            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'SELECT * FROM inspection_images WHERE inspection_id = ?',
                    [inspection_id],
                    (tx: any, results: any) => resolve(results),
                    (_: any, error: any) => reject(error)
                );
            });
            const len = results.rows.length;
           
            if (len > 0) {
                let counter = 0
                while (counter !==len){
                    outPut.push(results.rows.item(counter).image_uri)
                    counter++
                }
                return (outPut)
            }
            else {

                console.log('no images found')
            }
        } catch (error) {

            console.log(error)

        }




    }


}

export default UploadedImages


