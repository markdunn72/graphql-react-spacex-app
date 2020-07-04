const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema.js");

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true, // Disable in production
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
