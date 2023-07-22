// Create web server
// var http = require('http');
// var fs = require('fs');
// var server = http.createServer(function(request, response) {
//     console.log('client request URL: ', request.url);
//     if (request.url === '/') {
//         fs.readFile('index.html', 'utf8', function(errors, contents) {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/dojo.html') {
//         fs.readFile('dojo.html', 'utf8', function(errors, contents) {
//             response.writeHead(200, { 'Content-Type': 'text/html' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/stylesheets/style.css') {
//         fs.readFile('stylesheets/style.css', 'utf8', function(errors, contents) {
//             response.writeHead(200, { 'Content-type': 'text/css' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/images/dojo.jpg') {
//         fs.readFile('images/dojo.jpg', function(errors, contents) {
//             response.writeHead(200, { 'Content-type': 'image/jpg' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/images/dojo.jpg') {
//         fs.readFile('images/dojo.jpg', function(errors, contents) {
//             response.writeHead(200, { 'Content-type': 'image/jpg' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/images/dojo.jpg') {
//         fs.readFile('images/dojo.jpg', function(errors, contents) {
//             response.writeHead(200, { 'Content-type': 'image/jpg' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/images/dojo.jpg') {
//         fs.readFile('images/dojo.jpg', function(errors, contents) {
//             response.writeHead(200, { 'Content-type': 'image/jpg' });
//             response.write(contents);
//             response.end();
//         });
//     } else if (request.url === '/images/dojo.jpg