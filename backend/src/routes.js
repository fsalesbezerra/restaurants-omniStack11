const express = require('express');
const restaurantController = require('./controllers/restaurantController');
const menuController = require('./controllers/menuController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionController');

const routes = express. Router();

routes.post('/sessions', sessionController.create);

routes.get('/profile', profileController.index);

routes.get('/restaurants', restaurantController.index);
routes.post('/restaurants', restaurantController.create);

routes.get('/menus', menuController.index);
routes.post('/menus', menuController.create);
routes.delete('/menus/:id', menuController.delete);

module.exports = routes;