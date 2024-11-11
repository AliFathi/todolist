import express from 'express';
import path from 'node:path';
import { indexRouter, taskRouter } from './routes';

const app = express();

app.set('port', parseInt(process.env.PORT) || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.disable('view cache');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/', indexRouter);
app.use('/api', taskRouter);

export { app };
