import { Router } from 'express';
import { TaskStatus } from '../models';
import { TaskService } from '../services';
import { HttpStatusCodes } from './httpStatusCodes';

const taskRouter = Router();
const taskSvc = new TaskService();

taskRouter.get('/tasks', (req, res) => {
    const { status: qStatus, text: qText } = req.query;

    const tasks = taskSvc.select({
        // todo: validate user input
        status: parseInt(qStatus?.toString()) || TaskStatus.unknown,
        text: qText?.toString()
    });

    return res.send(tasks);
});

taskRouter.post('/tasks', (req, res) => {
    if (!Boolean(req.body?.text))
        return res.sendStatus(HttpStatusCodes.BadRequest);

    // todo: validate user input
    const task = taskSvc.add(req.body.text);
    return res.status(201).send(task);
});

taskRouter.get('/tasks/:id([0-9]+)', (req, res) => {
    const { id } = req.params;
    const task = taskSvc.find(parseInt(id));
    return task
        ? res.send(task)
        : res.sendStatus(404);
});

taskRouter.put('/tasks/:id([0-9]+)', (req, res) => {
    if (!Boolean(req.body))
        return res.sendStatus(HttpStatusCodes.BadRequest);

    const { id: pId } = req.params;
    const id = parseInt(pId);
    const task = taskSvc.find(id);
    if (!task)
        return res.sendStatus(HttpStatusCodes.NotFound);

    if (req.body.text)
        task.text = req.body?.text;

    if (req.body.status)
        task.status = req.body.status;

    return res.send(task);
});

taskRouter.delete('/tasks/:id([0-9]+)', (req, res) => {
    const { id: pId } = req.params;
    const id = parseInt(pId);

    const task = taskSvc.find(id);
    if (!task)
        return res.sendStatus(HttpStatusCodes.NotFound);

    taskSvc.delete(id);
    return res.send({});
});

export { taskRouter };
