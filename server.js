const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

//connect db
const connectDb = require("./config/connectDb");
connectDb();

//router user require
const user = require("./routes/user");
app.use(express.json());
app.use("/user", user);


//router product require
const product = require("./routes/product");
app.use("/product", product);

//router upload
const upload = require("./routes/upload");
app.use("/upload", upload);

//router cart
const cart = require("./routes/cart")
app.use("/api", cart);

//running server
app.listen(PORT, err => err ?console.log(err):console.log(`server run on ${PORT}`));


