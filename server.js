const express = require('express');
const path = require('path');
const server = express();

const buildDir = path.join(__dirname, 'dist');

server.get('/main.js', (request, response) => {
    response.sendFile(buildDir + '/main.js');
});

server.get('/*', (request, response) => {
    response.sendFile(buildDir + '/index.html', {
        headers: {
            'X-ESI': 1
        }
    });
});

server.listen(3004, () => {
    console.log('Server started.')
});