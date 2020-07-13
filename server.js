const express = require('express');
const path = require('path');
const app = express();
const port = 80;

app.use('/out', express.static(path.resolve('./out')));
app.use('/assets', express.static(path.resolve('./assets')));

app.get('*', (request, response) => {
    response.sendFile(path.resolve('./index.html'));
});

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }
    console.log(`server is listening on ${port}`)
});
