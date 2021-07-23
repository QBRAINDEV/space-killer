const express = require(`express`);
const http = require(`http`);
const path = require(`path`);
const app = express();
const server = http.createServer(app);
const io = require(`socket.io`)(server);

app.set(`port`, env.process.PORT || 8000);
app.use(express.static(`public`));
const port = app.get(`port`);

app.get(`/`, (req, res) => {
  res.status(200);
  res.sendFile(path.join(__dirname, `index.html`));
});

io.on(`connection`, (socket) => {
  io.on(`new-player`, () => {
    io.emit(`new-player`, playerID);
  });

  socket.on(`disconnect`, () => {
    console.log(`player disconneted`);
  });
});

server.listen(port, () => {
  console.log(`serving space killer...`);
});
