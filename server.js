const express = require("express");
const { createBareServer } = require("@tomphttp/bare-server-node");
const { uvPath } = require("@titaniumnetwork-dev/ultraviolet");

const app = express();
const bare = createBareServer("/bare/");
const PORT = process.env.PORT || 8080;

// Serve UV frontend and main site
app.use("/uv/", express.static("uv"));
app.use(express.static("."));

const server = app.listen(PORT, () => {
  console.log(`✅ Running at http://localhost:${PORT}`);
});

server.on("request", (req, res) => {
  if (bare.shouldRoute(req)) bare.routeRequest(req, res);
});
