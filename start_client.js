const http = require('http');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const PORT = 8080;
const FILE_PATH = path.join(__dirname, 'client.html');

const server = http.createServer((req, res) => {
    fs.readFile(FILE_PATH, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading client.html');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`本地客户端已启动: http://localhost:${PORT}`);
    const url = `http://localhost:${PORT}`;
    const start = (process.platform == 'darwin'? 'open': process.platform == 'win32'? 'start': 'xdg-open');
    exec(`${start} ${url}`);
});
