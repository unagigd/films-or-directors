import React from 'react';
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { Provider } from 'react-redux';

import store from '../src/store'
import AppContainer from '../src/containers/AppContainer';

const getHtml = (html, state) => `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no">
    <meta name="theme-color" content="#000000">
    <link rel="manifest" href="/manifest.json">
    <link rel="shortcut icon" href="/favicon.ico">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <title>React App</title>
    <link href="/static/css/main.65027555.css" rel="stylesheet">
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${html}</div>
    <script>
      window.PRELOADED_STATE = ${state.searchType ? JSON.stringify(state).replace(/</g, '\\u003c') : undefined}
    </script>

    <script type="text/javascript" src="/static/js/main.52a0fb93.js"></script>
  </body>
</html>
`;

const renderPage = (req, res) => {
  const context = {};
  const reduxStore = store();

  const app = (
    <Provider store={reduxStore}>
      <StaticRouter location={req.url} context={context}>
        <AppContainer />
      </StaticRouter>
    </Provider>
  )

  const html = renderToString(app)

  if (context.url) {
    res.redirect(context.url);
  }  

  const preloadedState = reduxStore.getState();

  res.send(getHtml(html, preloadedState));
};

export default renderPage;

