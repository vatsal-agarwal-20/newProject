import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import multer from 'multer';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import {register} from "./controllers/auth.js"
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"

/* CONFIGURATIONS */

//Need these two lines when using "type": "module" in your program
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/assets", express.static(path.join(__dirname, 'public/assets')));


/* FILE STORAGE */

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/assets");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage });

/* ROUTES WITH FILES*/

//upload part:- middleware
// here we can add verifyToken from the "middleware/auth.js" file in the middleware part but
// we do not need to do it in this endpoint because
// the user is yet to be registered therefore there is no need for authorization
//register:- controller (or the logic of the endpoint)
app.post("/auth/register", upload.single("picture"),register);


/* ROUTES */

// here we have defined the default router path as "/auth" 
// "in the auth.js" file in the routes folder
// this means that the path will be pre-fixed to "/login" by default
// when an "/auth" extension is present in the path
app.use("/auth",authRoutes);

app.use("/users",userRoutes);


/*-------------------------------------------------------------------------------*/
// Now we go to MongoDB
// and setup the .env file

/* MONGOOSE SETUP */

const PORT = process.env.PORT || 6001;
mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
})
    .catch((err) => console.log(`${err} did not connect`));

