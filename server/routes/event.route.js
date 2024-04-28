const express = require("express");
const Event = require("../models/event.model.js");
const router = express.Router();
const {getEvents} = require('../controllers/event.controller.js');

router.get('/',)