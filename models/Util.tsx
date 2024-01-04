
interface UtilClass {
    value: string
}


class Util {

    /*****
     * 
     * This class contains util methods for different funtionalities 
     * 
     * 
     */

    constructor() {

    }

    public setCapitalLatter(value: string) {
        let nameOutPut: string = '';
        let namesArray = value.split(" ");
        namesArray.forEach(element => {
            let name = element.split('');
            name[0] = this.toUpperCase(name[0]);
            name.forEach(element => {
                nameOutPut += element
            });
            nameOutPut += ' ';
        });
       
        return nameOutPut;

    }
    private toUpperCase(value: string) {
        return value.toUpperCase()

    }






}

export default Util;
