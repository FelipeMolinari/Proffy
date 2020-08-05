import express, { response } from 'express';
import ClassesControllers from './Controllers/ClassesControllers';

const routes = express.Router();
const classesControllers = new ClassesControllers();

routes.post('/classes', classesControllers.create);
routes.get('/classes', classesControllers.index);

export default routes;
