const http = require('http');

const url = 'http://localhost:8081/assets/clutch.png';

http.get(url, (res) => {
    console.log('Status Code:', res.statusCode);
    console.log('Content-Type:', res.headers['content-type']);
    console.log('Content-Length:', res.headers['content-length']);

    // Read a bit of the body to see if it looks like HTML
    let data = '';
    res.on('data', (chunk) => {
        if (data.length < 100) {
            data += chunk.toString();
        }
    });

    res.on('end', () => {
        console.log('First 100 characters of body:', data.substring(0, 100));
    });
}).on('error', (e) => {
    console.error('Error:', e);
});
