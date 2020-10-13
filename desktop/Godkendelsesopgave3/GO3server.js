var express = require('express')
var cors = require('cors')
var app = express()
const port = 3000

// hvordan linker jeg fra denne server fil, til mine classes i min anden js fil? dette ville da være nemmere når man har en frontend
var add = (function () {
  document.getElementById()
})();
 
app.use(cors())
//Endpoint for User
app.get('/user', function (req, res) {
  res.json(add())
});


//Endpoint for interest
app.get('/interest', function (req, res) {
  res.json('Endpoint Interest')
})

app.post('/interest', (req, res) => {
  res.send(test);
}) 

//Endpoint for Match
app.get('/match', function (req, res) {
  res.json('Endpoint Match')
})

app.post('/match', (req, res) => {
  res.send(test);
})
 
app.listen(port, function () {
  console.log('Server running on port 3000')
})


/*
//Login authentication
var isAuthenticated = isAuthenticated;

function isAuthenticated(req, res, next) {
  if (typeof req.headers.authorization !== "undefined") {
      // retrieve the authorization header and parse out the
      // JWT using the split function
      let token = req.headers.authorization.split(" ")[1];
      let privateKey = fs.readFileSync('./private.pem', 'utf8');
      // Here we validate that the JSON Web Token is valid and has been 
      // created using the same private pass phrase
      jwt.verify(token, privateKey, { algorithm: "HS256" }, (err, user) => {
          
          // if there has been an error...
          if (err) {  
              // shut them out!
              res.status(500).json({ error: "Not Authorized" });
              throw new Error("Not Authorized");
          }
          // if the JWT is valid, allow them to hit
          // the intended endpoint
          return next();
      });
  } else {
      // No authorization header exists on the incoming
      // request, return not authorized and throw a new error 
      res.status(500).json({ error: "Not Authorized" });
      throw new Error("Not Authorized");
  }
}
*/