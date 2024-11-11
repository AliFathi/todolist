import { Router } from 'express';

const indexRouter = Router();

/** صفحه خانه */
indexRouter.get('/', (req, res) => {
    return res.render('index');
});

export { indexRouter };
export { taskRouter } from './taskRoutes';
