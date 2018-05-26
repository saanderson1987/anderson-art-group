const fs = require('fs');
const express = require('express');
// MAY LOOK CLEANER USING A SWITCH/CASE STATEMENT INSTEAD

function setRoutes(app) {
  app.get('/api/isAuthenticated', (req, res) => {
    res.send(req.isAuthenticated());
  });
  // const authRoute = express.Router();
  // authRoute.get('/', (req, res) => {
  //   res.send(req.isAuthenticated());
  // });
  // app.use('/api/isAuthenticated', authRoute);
  const filenames = fs.readdirSync(__dirname);
  filenames.forEach((filename) => {
    const router = require(`./${filename}`);
    if (filename === 'set_routes.js' || filename === 'set_router.js') return;
    else if (filename === 'index.js') {
      // app.use('/', router)
    } else {
      const route = filename.split('.')[0];
      app.use(`/api/${route}`, router);
    }
  });
}

module.exports = setRoutes;
