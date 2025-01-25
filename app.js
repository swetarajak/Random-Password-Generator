import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';

const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(bodyParser.urlencoded({extended: true}));

// Set EJS as the templating engine
app.set('view engine', 'ejs');

// Serve static files (CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(3000, () => {
    console.log(`Server starting at port ${port}`);
})