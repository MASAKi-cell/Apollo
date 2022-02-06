const graphql = require('graphql');
const { GraphQLObjectType, GrapQLID,GraphQLString } = graphql

const MovieType = new GraphQLObjectType ({
    name: 'Movie',
    feilds: () => ({
        id: { type: GrapQLID },
        name: { type:GraphQLString },
        genere: { type:GraphQLString }
    })
})

const RootQuery = new GraphQLObjetcType({ //データの呼び出し
    name:'RootQueryType',
    feilds: {
        type: MovieType,
        args: {id:{ GrapQLString }},
        resolve(parents,args){
            return Movie.findById(args.id);
        }
    }
})

const Mutation = new GraphQLObjectType ({
    name : 'Mutation'
    fields: {
        type: MovieType,
        args: {
            
        }
    }
    
})