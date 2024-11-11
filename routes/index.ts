import { Router } from 'express';

const indexRouter = Router();

indexRouter.get('/', (req, res) => {
    return res.render('index');
});

export { indexRouter };
export { taskRouter } from './taskRoutes';
