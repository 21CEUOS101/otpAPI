const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require("dotenv").config({ path: './.env' });

app.use(express.json());
app.use(cors());
const routers = require('./routers');

app.use(routers);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});