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

