const http = require('http');
const cron = require('node-cron');
const { createContext } = require('vm');

const hostname = '127.0.0.1';
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World');
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);

    var task = cron.schedule('* * * * * *', () => {
        console.log('task submitted successfully')

    })
    setTimeout(() => {
        console.log('stop')
        task.stop()
    }, 2000);
    setTimeout(() => {
        console.log('start')
        task.start()
    }, 5000);
    setTimeout(() => {
        console.log('stop')
        task.stop()
    }, 8000);
});