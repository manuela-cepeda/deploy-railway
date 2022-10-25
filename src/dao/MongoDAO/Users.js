import mongoose from "mongoose";
import MongoDBContainer from "./MongoContainer.js";

const collection = 'users';
const productsSchema = mongoose.Schema ({
    email: {type: String, require: true}, 
    name:  {type: String, require: true}, 
    lastName:  {type: String, require: true}, 
    age: {type: String, require: true}, 
    alias:  {type: String, require: true}
  
},{timestamps:true})

export default class Users extends MongoDBContainer{
    constructor(){
        super(collection,productsSchema)
    }
    
  
}