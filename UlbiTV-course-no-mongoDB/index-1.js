const http = require("http");

const PORT = process.env.PORT ?? 5000;

// const server = http.createServer((req, res) => {
//   res.writeHead(200, {
//     'Content-type': 'text/html; charset=utf8f'
//   })

//   res.end('<h1>Hello World!</h1>')
// });

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-type": "application/json;",
  });

  if (req.url === "/users") {
    return res.end(
      JSON.stringify([
        {
          id: 1,
          name: "Artsiom",
        },
      ])
    );
  }
  if (req.url === "/posts") {
    return res.end("POSTS");
  }

  res.end(req.url);
});

server.listen(PORT, () => {
  console.log(`Server started on PORT: ${PORT}`);
});
