const express = require('express');

const app = express();
const data5= require("../Controller/fittness");


const dataRouter = express.Router();
dataRouter.route('/fittness').get(data5.fitData)

module.exports = dataRouter;