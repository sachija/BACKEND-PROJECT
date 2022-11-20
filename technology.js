const express = require('express');

const app = express();
const data3 = require("../Controller/technology");


const dataRouter = express.Router();
dataRouter.route('/technology').get(data3.techData)

module.exports = dataRouter;