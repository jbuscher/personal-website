const express = require('express');
const path = require('path');
const app = express();

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  app.use(express.static(path.join(__dirname, 'build')));
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/chaos', function (req, res) {
  app.use(express.static(path.join(__dirname, 'static', 'chaos')));
  res.sendFile(path.join(__dirname, 'static', 'chaos', 'index.html'));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
