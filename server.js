var fs = require("fs");
var http = require("http");

const server = http.createServer((req, res) => {
    console.log(req.url);

    let path = "";

    if (req.url.indexOf("/app.js") === 0) {
        res.writeHead(200, { "Content-Type": "aplication/js" });
        path = "app.js";
    } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        path = "labBasicAlg.html";
    }

    let html = fs.readFileSync("./" + path);

    res.write(html);
    res.end();
});

server.listen(3000);

console.log("Iniciando en 3000");
