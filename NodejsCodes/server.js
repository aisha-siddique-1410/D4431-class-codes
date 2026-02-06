// const http = require('http');

// // create server
// const server = http.createServer((req, res) => {

//     // set response header
//     res.writeHead(200, {'Content-type': 'text/plain'});

//     // send response
//     res.end('Hello World!! We are learning HTTP Module')
// });

// server.listen(3000, () => {
//     console.log('Server is running at http://localhost:3000')
// })



const http = require('http');
const fs = require('fs');

const FILE = "notes.json";

// Ensure file exists
if (!fs.existsSync(FILE)) {
    fs.writeFileSync(FILE, JSON.stringify([]));
}

const server = http.createServer((req, res) => {

    // GET all notes
    if (req.method === "GET" && req.url === "/notes") {

        fs.readFile(FILE, "utf-8", (err, data) => {
            if (err) {
                res.writeHead(500, { "Content-Type": "application/json" });
                return res.end(JSON.stringify({ error: "Failed to read notes" }));
            }

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(data);
        });

    }

    // POST add note
    else if (req.method === "POST" && req.url === "/add-note") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const newNote = JSON.parse(body);

                fs.readFile(FILE, "utf-8", (err, data) => {
                    if (err) {
                        res.writeHead(500, { "Content-Type": "application/json" });
                        return res.end(JSON.stringify({ error: "Failed to read notes" }));
                    }

                    const oldNotes = JSON.parse(data);
                    oldNotes.push(newNote);

                    fs.writeFile(FILE, JSON.stringify(oldNotes, null, 2), (err) => {
                        if (err) {
                            res.writeHead(500, { "Content-Type": "application/json" });
                            return res.end(JSON.stringify({ error: "Failed to save note" }));
                        }

                        res.writeHead(201, { "Content-Type": "application/json" });
                        res.end(JSON.stringify({ message: "Note added successfully" }));
                    });
                });

            } catch (error) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });

    }

    else {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Route not found" }));
    }
});

server.listen(3000, () => {
    console.log("Server started on port 3000");
});
