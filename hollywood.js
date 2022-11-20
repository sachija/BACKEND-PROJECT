const express = require('express');

const app = express();
const data1 = require("../Controller/Hollywood");


const dataRouter = express.Router();
dataRouter.route('/hollywood').get(data1.hollywoodData)

module.exports = dataRouter;