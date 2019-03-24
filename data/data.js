const graphql = require("graphql");
const db = require("./dbconn.js");

const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLList,
  GraphQLSchema,
  GraphQLNonNull
} = graphql;

let CountryIndexesType = new GraphQLObjectType({
  name: "CostOfLivingIndex",
  fields: () => ({
    country_id: { type: GraphQLID },
    country_name: { type: GraphQLString },
    mean_download: { type: GraphQLInt },
    cost_of_living_index: { type: GraphQLInt },
    crime_index: { type: GraphQLInt },
    safety_index: { type: GraphQLInt },
    tourism_index: { type: GraphQLInt }
  })
});

const RootQuery = new GraphQLObjectType({
  name: "TravelPickerSchema",
  fields: {
    getCountryIndexes: {
      type: GraphQLList(CountryIndexesType),
      args: {
        country_id: { type: GraphQLID },
        country_name: { type: GraphQLString },
        cost_of_living_index: { type: GraphQLInt },
        mean_download: { type: GraphQLInt },
        crime_index: { type: GraphQLInt },
        safety_index: { type: GraphQLInt },
        tourism_index: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        const query = `SELECT country_id, country_name, mean_download, cost_of_living_index, crime_index, safety_index, tourism_index FROM public.countries_indexes 
        WHERE cost_of_living_index > ${
          args.cost_of_living_index
        } AND mean_download > ${args.mean_download}
          AND crime_index > ${args.crime_index}
        AND safety_index > ${args.safety_index}
        AND tourism_index > ${args.tourism_index}
        `;
        return db.conn
          .any(query)
          .then(data => {
            console.log(data);
            return data;
          })
          .catch(err => {
            return "The error is", err;
          });
      }
    },
    getCountryRank: {
      type: CountryIndexesType,
      args: {
        country_id: { type: GraphQLID },
        country_name: { type: GraphQLString },
        cost_of_living_index: { type: GraphQLInt },
        mean_download: { type: GraphQLInt },
        crime_index: { type: GraphQLInt },
        safety_index: { type: GraphQLInt },
        tourism_index: { type: GraphQLInt }
      },
      resolve(parentValue, args) {
        const query = `SELECT country_id, country_name, mean_download, cost_of_living_index, crime_index, safety_index, tourism_index
        FROM public.countries_indexes WHERE country_id = ${args.country_id}`;
        return db.conn
          .one(query)
          .then(data => {
            console.log(data);
            return data;
          })
          .catch(err => {
            return "The error is", err;
          });
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
