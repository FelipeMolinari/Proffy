import express, { response } from 'express';
import ClassesControllers from './Controllers/ClassesControllers';
import ConnectionController from './Controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControllers();

const conectionsController = new ConnectionController();
routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

routes.post('/connections', conectionsController.create);
routes.get('/connections', conectionsController.index);
export default routes;
