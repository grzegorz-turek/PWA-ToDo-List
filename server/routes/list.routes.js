const express = require('express');
const router = express.Router();
const ListController = require('../controllers/list.controllers');

/* get full list */
router.route('/list').get(ListController.getListFromServer);

/* add one item to list */
router.route('/list').post(ListController.addItemToList);

/* remove one item from list */
router.route('/list').delete(ListController.removeItemFromList);

/* update one item from list */
router.route('/list').put(ListController.updateItemFromList);


module.exports = router;