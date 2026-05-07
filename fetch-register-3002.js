
const http = require('http');

http.get('http://localhost:3000/register', (res) => {
    console.log('Status BaseCode:', res.statusCode);
    console.log('Headers:', res.headers);
    let data = '';
    res.on('data', (chunk) => {
        data += chunk;
    });
    res.on('end', () => {
        console.log('Body Length:', data.length);
        if (data.includes('Create an account')) {
            console.log('Success: "Create an account" found in body.');
        } else {
            console.log('Body Preview:', data.substring(0, 500));
        }
    });
}).on('error', (err) => {
    console.error('Error:', err.message);
});
