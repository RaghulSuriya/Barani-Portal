<<<<<<< HEAD

const http = require('http');

http.get('http://localhost:3000/register', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
=======

const http = require('http');

http.get('http://localhost:3000/register', (res) => {
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log(data);
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
>>>>>>> 35f8b4db7cb98930b5bb54f9715f68db976389b0
