const express = require('express');
const path = require('path');


const app = express();

// setup static folder in case of having lot of html files that need to be routed one by one

app.use(express.static(path.join(__dirname, 'public'), {extensions: ['html']} ))


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

app.listen(8000, () => console.log(`Server is running on port 8000`)
)