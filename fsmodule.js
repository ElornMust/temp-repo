const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our homepage');
        return;
    }
    if (req.url === '/about') {
        res.end('This is a small story about us !');
        return;
    }
    res.end(
        `<h1> OOPS! </h1> 
        <p> Page not Found </p>
        <a href='/'> Back to the HomePage </a>`
    );

});

server.listen(5000);
//de tinut minte! Doar un singur res.end() poate fii invocat
//daca avem mai multe optiuni trebuie sa folosim 'return' in functii
//altfel ne va da eroare si se intrerupe serverul !!!