import http from "http";

const PORT = 3000;

const routes = {
    "/": "Node API",
    "/books": "Books Route",
    "/authors": "Authors Route"
};

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end(routes[req.url]);
});

server.listen(PORT, () => {
    console.log("Server is listening port 3000...");
});
