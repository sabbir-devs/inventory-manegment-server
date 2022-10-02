const express = require('express');
const { storeController } = require('../controllers/store.controller');
const router = express.Router();

router.route('/')
.get(storeController.getStoreController)
.post(storeController.createStoreController)

router.route('/:id').get(storeController.getStoreById)