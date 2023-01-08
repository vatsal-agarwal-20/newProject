mkdir server
cd server
npm i -g nodemon

npm init -y

npm i express body-parser bcrypt cors dotenv gridfs-stream multer multer-gridfs-storage helmet morgan jsonwebtoken mongoose

express :-backend environment
body-parser :- to parse body requests
bcrypt :- for password encryption
cors :- cross-origin requests
dotenv :- for environment variables
gridfs-stream :- file upload
multer :- upload files locally
multer-gridfs-storage :- upload files locally
helmet :- request safety
morgan :- logging
jsonwebtoken :- authentication
mongoose :- mongoDB access

"main": "index.js",
  "type": "module", ---> add this line in package.json file to import modules in node.js rather than using 'require' keyword
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },


file storage configurations and then mongoose setup

Terminal:
nodemon index.js ---> Server Port: 3001

Look at the structure of the database we need to use
and then create all the relations between different types of data
Data Model:- data diagram.png

Handling Authentication and Authorization
Starting with Auth Register
(under File Storage part)

Creating auth.js file in new "controllers" folder
Then creating user schema in User.js in new "models" folder


