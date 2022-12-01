import express from "express";
import viewsRouter from "./routes/views.router.js";
import sessionsRouter from "./routes/sessions.router.js";

import __dirname from "./utils.js";
import handlebars from "express-handlebars"


import session from 'express-session';
import MongoStore from 'connect-mongo';
import initializePassport from "./config/passport.config.js";
import passport from "passport";

import {ApolloServer} from 'apollo-server-express'
import resolvers from "./graphql/resolvers.js";
import typeDefs from "./graphql/typeDefs.js";

//inicializamos express y websocket
const app = express();
// const PORT = config.app.PORT;
const PORT = process.env.PORT || 8080 
const server = app.listen(PORT, ()=>{
    console.log(`listening on port ${PORT}`);
});

app.use(express.json());
app.use(express.static(__dirname+'/public'));

//session
app.use(session({
	store: MongoStore.create({
		// mongoUrl: config.mongo.MONGO_URL, 
		mongoUrl: process.env.MONGO_URL, 
		ttl:600, 
	}),
	secret: "C0derSessi0n3000",
	resave: false, 
	saveUninitialized: false
}))

//passport
initializePassport();
app.use(passport.initialize());
app.use(passport.session());

//routes
app.use('/', viewsRouter);
app.use('/api/sessions', sessionsRouter);

//GRAPHQL
const apolloServer = new ApolloServer({typeDefs, resolvers});
await apolloServer.start();
apolloServer.applyMiddleware({app})


// template engine config
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine','handlebars');





