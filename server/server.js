import path from 'path';
import express from 'express';

const app = express();
const distPath = path.join(__dirname + '../../dist');

app.use(express.static(distPath));

app.get('*', (req, res) => {
    res.sendFile(distPath + '/index.html');
});

app.listen(3000, () => {
    console.log('server running at http://localhost:3000');
});
