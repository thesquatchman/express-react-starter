/* eslint no-console:0 */
require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');
const ReactRouter = require('react-router-dom');
const App = require('./client/App').default;

const { StaticRouter } = ReactRouter;
const port = 8080;

const server = express();
const router = express.Router();
const apiRoutes = express.Router();

apiRoutes.use(function(req, res, next) {
  req.apiCheck = true;
  next();
});
server.use('/api', apiRoutes);

server.use('/public', express.static('./public'));

router.use((req, res, next) => {
  if (!req.apiCheck) {
    // if the request is not an API route, then use react static render
    const context = {};
    const body = ReactDOMServer.renderToString(
      React.createElement(StaticRouter, { location: req.url, context }, React.createElement(App))
    );

    if (context.url) {
      res.redirect(301, context.url);
    }

    res.send(
      `<!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <title>Express React Starter</title>
          <link rel="stylesheet" href="/public/style.css" />
      </head>
      <body>
          <div id="app">${body}</div>
          <script src="/public/bundle.js"></script>
      </body>
    </html>`
    );
    res.end();
  } else {
    next();
  }
});

router.route('/api').get(function(req, res) {
  res.json({ message: 'hello' });
  res.end();
});

server.use(router);

console.log(`listening on ${port}`);
server.listen(port);
