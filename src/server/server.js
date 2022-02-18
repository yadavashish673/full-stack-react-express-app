import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { port } from '../config';
import path from 'path';

const app = express();

app.listen(port, () => {
    console.log(`listening on post ${port}`);
});

app.use(
    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
);

if (process.env.NODE_ENV !== 'production') {
    app.use(express.static(path.resolve(__dirname, '../../dist')));
    app.get('/*', (req, res) => {
        res.sendFile(path.resolve('index.html'));
    })
}

app.get('/', (req, res) => {
    res.send('Hello world!!');
});

app.post('/task', async (req, res) => {
    const newArray = [{
        id: 'u1',
        name: 'user-1'
    },
    {
        id: 'u2',
        name: 'user-2',
    }];
    res.status(200).send(newArray);
});
