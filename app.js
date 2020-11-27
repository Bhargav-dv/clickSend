const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");


var api = require('./node_modules/clicksend/api.js');

var smsApi = new api.SMSApi("SleepDrunk", "8661B131-FB76-9467-BD40-461086314F9C");
var smsMessage = new api.SmsMessage();


const app = express();


//So that we can use HTML as file extention
app.set("view engine", "html");
app.engine("html", ejs.renderFile);

//Public folder
app.use(express.static(__dirname + '/public'));

//midlerware for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//route
app.get("/", (req,res)=>{
    res.render("index");
});

//Post 
app.post("/", (req, res)=>{
    const number = req.body.num;
    // const message = req.body.text;
    smsMessage.source = "sdk";
    smsMessage.to = number;
    smsMessage.body = "Welcome to Schabu \n please click on the link below to continue with the interview process \n 'Working on It'";  

    var smsCollection = new api.SmsMessageCollection();
    smsCollection.messages = [smsMessage];

    smsApi.smsSendPost(smsCollection).then(function(response) {
        console.log(response.body);
      }).catch(function(err){
        console.error(err.body);
      });
    // res.send(req.body);
    // console.log(req.body)
})

app.listen(3200);