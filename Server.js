const express = require("express");
const graphqlHTTP = require("express-graphql");
const data = require("./data/data.js");
const cors = require("cors");
const app = express();
const path = require('path')
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

//serve statis assets if in production
if(process.env.NODE_ENV === "production"){
  //set static folder
  app.use(express.static('client/travel-picker'))
  app.get('*', (req,res) =>{
    res.sendFile(path.resolve(__dirname, 'client', 'travel-picker', 'index.html' ))
  }
}

app.listen(process.env.PORT || 4000);
console.log("app running on port ", 4000);
