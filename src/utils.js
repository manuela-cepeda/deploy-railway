import path from 'path';
import { fileURLToPath } from 'url';
import multer from 'multer';
import bcrypt from 'bcrypt';

export const createHash = password => bcrypt.hashSync(password, bcrypt.genSaltSync(10))
export const isValidPassword = (user, password) => bcrypt.compareSync(password, user.password)

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, __dirname+'/public/img')
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+'-'+file.originalname)
    }
})


export const reemplaceId = (chats) => {
    let lista = []
    for (let i=1;i<chats.length;i++){
      console.log(chats[i].author);
      const copyAuthor = {
        id: chats[i]._id.toString(),
        email: chats[i].author.email,
        name: chats[i].author.name,
        lastName: chats[i].author.lastName,
        age: chats[i].author.age,
        alias: chats[i].author.alias,
        avatar: chats[i].avatar
      }
      const aux = {
        id: chats[i]._id.toString(),
        author: copyAuthor,
        text: chats[i].text
      }
    lista.push(aux)
    }
    return lista
  }

export const uploader = multer({storage})
export default __dirname;