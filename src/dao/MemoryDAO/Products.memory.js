import faker from "faker";
import MemoryCotainer from "./MemoryContainer.js";

faker.locale = 'es'
const {commerce, image , datatype} = faker

export default class Products extends MemoryCotainer {
    constructor(){
        super();
    }

    populate = (quantity=5) => { 
        this.data = []
        for (let i=0; i<quantity ; i++){
            this.data.push({
                id: datatype.uuid(),
                title: commerce.product(),
                price: commerce.price(),
                thumbnail: image.dataUri( 50,  50, 'grey')
              
            })
        }
        return true;
     }
}