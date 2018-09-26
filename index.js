const express = require('express');

const path = require('path');

const server = express();
const PORT = process.env.PORT || 3000;

server.use(express.static(path.join(__dirname, 'app')));

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
