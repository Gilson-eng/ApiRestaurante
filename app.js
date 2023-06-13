const express = require('express');
const app = express();
const PORT = 8080;
var cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors());

const produtoRoute = require("./routes/produtoRoute");
app.use("/produtos", produtoRoute);

const userRoute = require("./routes/userRoute");
app.use("/user", userRoute);

app.listen(PORT, ()=> console.log("Server runnig " + PORT))