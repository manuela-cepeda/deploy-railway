import mongoose from "mongoose";
import MongoDBContainer from "./MongoContainer.js";

const collection = 'registeredUsers';
const productsSchema = mongoose.Schema ({
    email: {type: String, require: true}, 
    name:  {type: String, require: true}, 
    password:  {type: String, require: true}  
},{timestamps:true})

export default class User extends MongoDBContainer{
    constructor(){
        super(collection,productsSchema)
    }
    
    getByEmail = async (email) => {
        let results = await this.model.findOne({email: email});
        return results;
    };
    
  
}