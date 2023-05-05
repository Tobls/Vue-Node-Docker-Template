const express = require('express');
const path = require('path')

const app = express(),
      port = 8080;

app.use(express.static(path.resolve('/app/client/dist')));

app.get('/api/test', (req, res) => {
  res.json({"message": "test"});
});

app.get('/', (req,res) => {
  res.sendFile(path.resolve('/app/client/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});