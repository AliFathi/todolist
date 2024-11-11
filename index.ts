import { app } from './app';

const port = app.get('port');
const server = app.listen(port, () => {
    // todo: use a logger
    console.log(`server started, listening on http://localhost:${port}`);
});

export = server;
