import { GraphQLServer } from "graphql-yoga"
import mongoose from "mongoose"
import resolvers from "./graphql/resolvers"

mongoose.Promise = global.Promise;

mongoose.set('useNewUrlParser', true);
mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/kmemo');
let mongo = mongoose.connection;

mongo.once('open', () => {
    console.log('MongoDB Connected...');
});
mongo.on('error', function (error) {
    console.log('MongoDB Connection Error!!');
});

const gqlServer = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})

let port = 4000;
gqlServer.start(port, () => console.log(`Graphql Server on! => http://localhost:${port}`));