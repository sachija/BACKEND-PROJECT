const express = require('express');

const app = express();
const data4 = require("../Controller/food");


const dataRouter = express.Router();
dataRouter.route('/food').get(data4.foodData)

module.exports = dataRouter;