import db from "../util/database";
class UploadedImages {
    image_url: string
    inspection_id: string

    constructor(image_url: string, inspection_id: string,
    ) {
        (this.inspection_id = inspection_id,

            this.image_url = image_url),
            (this.inspection_id = inspection_id)


    }

    async addImage() {

        try {
            const tx: any = await new Promise((resolve, reject) => {
                db.transaction((tx) => resolve(tx), reject);
            });
            const results: any = await new Promise((resolve, reject) => {
                tx.executeSql(
                    'INSERT INTO inspection_image (images_url,inspection_id) VALUES (?,?)',
                    [this.image_url, this.inspection_id],
                    (tx: any, results: any) => resolve([results, console.log("image inserted with ID ", this.inspection_id)]),
                    (_: any, error: any) => reject(error)
                );
            });
        } catch (error) {

            console.log(error)

        }

    }


}

export default UploadedImages


