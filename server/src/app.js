const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(cors());

app.post('/register', (req, res) => {
  res.send({
    message: `user: ${req.body.email} Confirmed`
  })
})

app.listen(process.env.PORT || 8081)