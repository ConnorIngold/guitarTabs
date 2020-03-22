const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const {sequelize} = require('./models')
const config = require("./config/config");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

require('./routes')(app);

sequelize.sync()
  .then(() => {

    app.listen(process.env.PORT || 8081);
    console.log(`server started on port ${config.port}`);
    
  })

