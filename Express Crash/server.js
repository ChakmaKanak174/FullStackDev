import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

import posts from './routes/posts.js' // router module 
import logger from './middleware/logger.js';
import errorHandler from './middleware/errorHandler.js';
import notFoundHandler from './middleware/botFound.js';
const port = process.env.PORT || 8000;


// get directory name 
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const app = express();

// Body parser middleware

app.use(express.json());    // raw json 
app.use(express.urlencoded({ extended: false })); // allows to send form data

//logger middleware
app.use(logger)

// setup static folder in case of having lot of html files that need to be routed one by one

app.use(express.static(path.join(__dirname, 'public')))


// no need to manually check the req.method like in the base node
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.get('/about', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'about.html'));
// });

// app.get('/about', (req, res) => {
//     res.send('About');
// })

// routes are imported and used here using use method and it is used as middleware. 

app.use('/api/posts', posts);

app.use(notFoundHandler);
// ErrorHandler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`)
)