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


2. Authorization

---> creating a new folder middleware 
inside the middleware folder we define a file "auth.js"

the authorization part is created and we can use the verifyToken
in the middleware part of API calls where the authorization part is necessary


---------------------------------------

Now we will setup the user routes

We have 3 kinds of user routes to be defined

-> Current User information (on the left)
or any other user information through user id

-> User Friends list

-> Updating friends list when add friend button is clicked

Define the userRoutes in the index.js file then
Create a new file "users.js" in the routes folder
where the CRUD API calls will be defined

and the logic of these calls will be defined 
in the controllers folders in a new file 
named "users.js".

In the user.js file inside the controllers folder
--- Define getUser

--- Define getUserFriends
-> In this we use Promise.all() for const friends because 
here we will make multiple API calls for friends

Also after mapping the friends, we will format the friends 
according to the way we want it to be displayed
in the frontend and so, we will also make some changes
in our User schema.

--- Define addRemoveFriend
Here we will update the friends list

If the friends already exists then we will remove it and 
if it does not exist we will add it from both endpoints 
i.e from the user's list and from the friend's list.

---------------------------------------------------------------------------

Now, we will define the POST routes

Firstly we define the post route in the index.js file and also 
another routes with file in the index.js where we can upload a picture

create a posts.js file in the routes folder where the API calls will be defined

and in the controllers folder, the posts.js file will handle
the information needed for the API calls just like we did in the users scenario

Now we will create a model for Post in the models folder which will be 
imported in the posts.js file inside the controllers folder

in the posts.js file in the controllers folder we 
perform the CRUD operations where we use get and post calls
to fetch and post the posts and the findByIdandUpdate call to 
like and dislike the post.

With this our backend part is complete

Add the dummy data in the index.js file in the data folder

Now, we will be updating the main index.js accordingly to use the
dummy data in our application.
The updation will be done inside the app.listen part when the
application runs successfully i.e. where the server port is defined

/* ADD THIS DATA ONLY ONE TIME */
    // So we will just save this once and then comment 
    // out these two statements else the data will be 
    // copied another time 

    //By this method we have manually added data to our mongoose model

    // User.insertMany(users);
    // Post.insertMany(posts);


------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------
------------------------------------------------------------------------------------------------------


FRONTEND
-----------

Installing the required packages

--> npm i react-redux @reduxjs/toolkit redux-persist react-dropzone dotenv formik yup react-router-dom@6 @mui/material @emotion/react @emotion/styled @mui/icons-material

redux --> state management across the application

redux-persist --> helps to store the states in localStorage
which means that if the user closes the tab and visits the website again
his/her information will be stored.

dropzone --> to share images from frontend to the backend

dotenv --> for environment variables

formik --> for forms

yup --> validation

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
copying linkedin and twitter png files from backend assets 
to the frontend assets

----------------------------------------------------------------------------------

importing font style and then creating a new file called

jsconfig.json which is defined as:-

{
    "compilerOptions": {
        "baseUrl": "src"
    },
    "include": ["src"]
}

----------------------------------------------------------------------------------




