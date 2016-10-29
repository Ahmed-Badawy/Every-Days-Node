> npm init -y //init project & creating package.json
> npm install express -S //install express
> node index.js   --   start index.js
> we added "start": "node index.js" under the script block in package.json to auto start in index.js /// now we can run it like this:   >npm start


//installing nodemon for automatic refresh during development
> npm i -D nodemon //install
> we added     "dev" : "nodemon index.js" in the package.json to autorefresh from index.js
now you will notice that >npm run dev // will run & update the modified files  


//require a json file then itirate over it
> npm install lodash --save

//use templating engines: 
1- >npm install jade  //jade templates
2- >npm install -S handlebars consolidate


//process the querys (get & post & put & delete)
>npm install -S body-parser


/*Testing 
1- install ( "mocha": "^2.4.5", "should": "^8.3.1", "supertest": "^1.2.0" )
2- create (test) folder
3- in the main dir open the cmd & run mocha (this will run all the test foler)
4- 






/*--------------------------------------------------------------
	How to create express website
--------------------------------------------------------------*/
//$ npm install --g express : install express
//$ npm install --save express : install express
//$ npm install -g express-generator : install express generators //now you can use the express command
//$ express mywebsite : creates the mywebsite project
//$ cd mywebsite : get into the website (you can use the ./ directory to install in the current opened folder)
//$ npm install : installs the express framework dependences
//$ npm start : start the server
/**********************************************************************/


/*--------------------------------------------------------------
	How to Remove Powered By from the headers
--------------------------------------------------------------*/
//add this in the app.js file just before app.use('/', routes);
app.use(function (req, res, next) { //this is a middleware
  res.removeHeader("X-Powered-By");
  next();
});
/**********************************************************************/