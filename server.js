const express = require('express');
const path = require('path');

// const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



//set static folder
app.use(express.static(path.join(__dirname, "public")));

//main route
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// //build mode
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/index.html'));
// })

// //production mode
// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('/index.html'));

//     app.get('*', (req, res) => {
//         res.sendfile(path.join(__dirname, 'index.html'));
//     })
// }

//start server
app.listen(PORT, (req, res) => {
    console.log(`server listening on port: ${PORT}`);
})