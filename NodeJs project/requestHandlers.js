var exec = require("child_process").exec;
var fs = require ('fs');
function start(response) {
    console.log("Request handler 'start' was called.");
    fs.readFile('start.html', function(err, htmlContent) {
        if (err) {
            // En cas d'erreur de lecture du fichier
            response.writeHead(500, { "Content-Type": "text/plain" });
            response.write("Erreur interne du serveur.");
            response.end();
        } else {
            // Si la lecture du fichier est réussie, renvoyer le contenu HTML
            response.writeHead(200, { "Content-Type": "text/html" });
            response.write(htmlContent);
            response.end();
        }
    });
}


function find(response) {
console.log("Request handler 'start' was called.");
exec("find /",
{ timeout: 10000, maxBuffer: 20000*1024 },
function (error, stdout, stderr) {
response.writeHead(200, {"Content-Type": "text/plain"});
response.write(stdout);
response.end();
});
}
function upload(response) {
console.log("Request handler 'upload' was called.");
fs.readFile('upload.html', function(err,htmlContent){
        if (err) {
            // En cas d'erreur de lecture du fichier
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Erreur interne du serveur.");
            response.end();
        } else {
            // Si la lecture du fichier est réussie, renvoyer le contenu HTML
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlContent);
            response.end();
        }
    });
}
function show(response) {
console.log("Request handler 'show' was called.");
fs.readFile('show.html', function(err,htmlContent){
        if (err) {
            // En cas d'erreur de lecture du fichier
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Erreur interne du serveur.");
            response.end();
        } else {
            // Si la lecture du fichier est réussie, renvoyer le contenu HTML
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlContent);
            response.end();
        }
    });
}
function login(response) {
console.log("Request handler 'login' was called.");
fs.readFile('login.html', function(err,htmlContent){
	if (err) {
            // En cas d'erreur de lecture du fichier
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Erreur interne du serveur.");
            response.end();
        } else {
            // Si la lecture du fichier est réussie, renvoyer le contenu HTML
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlContent);
            response.end();
        }
    });
}
function logout(response) {
console.log("Request handler 'start' was called.");
fs.readFile('logout.html', function(err,htmlContent){
        if (err) {
            // En cas d'erreur de lecture du fichier
            response.writeHead(500, {"Content-Type": "text/plain"});
            response.write("Erreur interne du serveur.");
            response.end();
        } else {
            // Si la lecture du fichier est réussie, renvoyer le contenu HTML
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(htmlContent);
            response.end();
        }
    });
}

exports.start = start;
exports.upload = upload;
exports.find = find;
exports.show = show;
exports.login = login;
exports.logout = logout;
