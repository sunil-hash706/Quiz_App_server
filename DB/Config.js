
const mongoose = require("mongoose");
const  dotenv = require( 'dotenv');
dotenv.config();
mongoose.connect(process.env.URL,{UseNewUrlParser: true, useUnifiedTopology: true});
