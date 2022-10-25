import { Router } from "express";
import Chat from "../dao/MongoDAO/Chat.js";
import { normalize, schema } from "normalizr";
import { reemplaceId } from "../utils.js";

const router = Router();
const chatService = new Chat()

router.get('/', async (req, res)=>{   
    let chats = await chatService.getAllPopulated()
    const test =  reemplaceId(chats)
    console.log(test)
    let chatMongo = {  
        id: 1,
        messages: test
    }

    
    const author = new schema.Entity('authors')
    const message = new schema.Entity( 'messages', {
        author: author
    })
    const chat = new schema.Entity( 'chats', {
    messages:[message]
    })
    const normalizedData = normalize(chatMongo, chat)
    // console.log(JSON.stringify(normalizedData,null,'\t'))
    res.send(normalizedData)
 })

export default router;