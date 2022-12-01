import User from "../dao/MongoDAO/User.js";
const usersService = new User()

const resolvers = {
    Query: {
        getAllUsers: async ()=> {
            let users = await usersService.getAll();
            return users;
        }
    },
    Mutation: {
        createUser: async(_, args)=>{
            let result = await usersService.save(args);
            return result;
        }
    }
}

export default resolvers;