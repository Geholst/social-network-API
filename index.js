const express = require('express');
const db = require('./config/index');
const routes = require('./routes');

const PORT = 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`running on port ${PORT}!`);
  });
});

// process.on('uncaughtException', function (err) {
//   console.log(err);
// }); 