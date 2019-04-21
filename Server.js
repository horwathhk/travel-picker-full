const express = require("express");
const graphqlHTTP = require("express-graphql");
const data = require("./data/data.js");
const cors = require("cors");
const app = express();

//GRAPHQL
//allow cross-origin access
app.use("*", cors({ origin: "http://localhost:3000", credentials: true }));
// app.use(cors());
app.use(
  "/travelpicker",
  graphqlHTTP(req => {
    return {
      schema: data,
      graphiql: true
    };
  })
);

app.listen(process.env.PORT || 4000);
console.log("app running on port ", 4000);
