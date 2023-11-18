const express = require("express");
const cors = require("cors");
require("./DB/Config");
const Question = require("./DB/Question");
const app = express();
const  dotenv = require( 'dotenv');
dotenv.config();

app.use(express.json());
app.use(cors());

app.post("/add-question", async (req, res) => {
  const question = new Question(req.body);
  // console.log(req.body);
  let result = await question.save();
  result = result.toObject();
  res.send(result);
});

app.get("/", async (req, res) => {
  res.send("Ye bhi thik hai");
});
app.get("/questions", async (req, res) => {
  let questions = await Question.find();
  res.send(questions);
});

const http = require("http");
const server = http.createServer(app);
server.listen(process.env.PORT||5000);



