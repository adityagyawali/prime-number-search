const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

//database connection
const DB = require("./config/keys").MONGO_URI;
mongoose
	.connect(
		DB,
		{ useNewUrlParser: true }
	)
	.then(() => {
		console.log(`MongoDB Connected`);
	})
	.catch(res => res.json({ error: "could not connect the database" }));

//bodyparser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());

const input = require("./routes/api/input");
//Use Routes
app.use("/api/input", input);

const PORT = 5000;

app.listen(PORT, () => {
	console.log(`Server is running in ${PORT}`);
});
