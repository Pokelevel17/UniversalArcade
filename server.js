import express from "express";
import { bareServer } from "bare-server-node";
import path from "path";

const __dirname = process.cwd();
const app = express();
const bare = bareServer();

// Serve your main website (root /)
app.use("/", express.static(path.join(__dirname, "public"))); /https://pokelevel17.github.io/UniversalArcade/

// Serve Ultraviolet frontend at /proxy/
app.use("/proxy/", express.static(path.join(__dirname, "Ultraviolet/dist")));

// Handle bare proxy engine
app.use("/bare/", (req, res) => {
  bare.handleRequest(req, res);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Main site at http://localhost:${PORT}/`);
  console.log(`Ultraviolet at http://localhost:${PORT}/proxy/`);
});
