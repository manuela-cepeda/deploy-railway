import {gql} from 'apollo-server-express';

const typeDefs = gql`

    type User {
       
        email: String
        name: String
        password: String 
    }

    type Query {
        getAllUsers: [User]
    }

    type Mutation {
        createUser(name:String, email:String, password:String) : User
    }

`

export default typeDefs;