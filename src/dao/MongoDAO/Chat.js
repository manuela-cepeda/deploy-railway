import mongoose from "mongoose";
import MongoDBContainer from "./MongoContainer.js";

const collection = 'chat';
const productsSchema = mongoose.Schema ({
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'users',
         require: true
        },
    text: {type: String, require: true}, 
},{timestamps:true})

export default class Chat extends MongoDBContainer{
    constructor(){
        super(collection,productsSchema)
    }

 
  
}