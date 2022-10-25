export default class MemoryCotainer {
    constructor(){
        this.data = []
    }

    getAll = ()=> {
        return this.data        
    }
    save = (element) => {
        this.data.push(element)
        return element
    }
}