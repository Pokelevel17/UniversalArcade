const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve your arcade front-end
app.use('/', express.static(path.join(__dirname)));

// Serve Ultraviolet proxy
app.use('/proxy', express.static(path.join(__dirname, 'Ultraviolet')));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
