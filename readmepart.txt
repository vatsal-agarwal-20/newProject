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

1. Authentication

---> Starting with Auth Register
(under File Storage part)

Creating auth.js file in new "controllers" folder
Then creating user schema in User.js in new "models" folder

---> Now we start with the LOGIN information process

Creating "auth.js" file in new "routes" folder

Normally the "Register User" part would also come in the routes folder but
here we are uploading a photo while registering and we have an 
"upload" variable in the index.js file, therefore we define the register user part
in the index.js file.

Authentication is complete.
Now, we move on to Authorization i.e. to control who can use the further
endpoints of the application i.e. a registered and logged in user can use the 
other properties of the application whereas a non-registered or non-logged in user
cannot use the application further before completing the primary processes such as 
registering and logging in.


 
