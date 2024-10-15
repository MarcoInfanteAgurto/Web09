const express = require('express');
const web = express();
const path = require('path');

web.use(express.static(path.join(__dirname, 'public')));

web.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const PORT = 3000;
web.listen(PORT, () => {
    console.log("Server Prendido");
})