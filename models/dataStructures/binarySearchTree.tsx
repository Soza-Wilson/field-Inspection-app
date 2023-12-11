class BinarySearchTree {

    private data: any;
    private left: any;
    private right: any;

    constructor(data: object) {

        this.data = data;
        this.left = null;
        this.right = null;
    }
    addChild(newData: object) {
        if (newData == this.data) {
            return
        }
        if (newData < this.data) {
            if (this.left) {
                this.left = this.left.addChild(newData)
            }
            else {
                this.left = new BinarySearchTree(newData)
            }
        }
        if (newData > this.data) {
            if (this.right) {
                this.right = this.right.addChild(newData)
            }
            else {
                this.right = new BinarySearchTree(newData)
            }
        }
    }

    inOrderTraversal = async () => {

        let outPutData = []
        if (this.left !=null) {
            outPutData.push(this.left.inOrderTraversal())
        }   
            outPutData.push(this.data)

        if(this.right != null){
            outPutData.push(this.right.inOrderTraversal())
        }

        return outPutData;
    }



}