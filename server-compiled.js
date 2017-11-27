'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _index = require('./server/index.jsx');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const express = require('express')
var server = (0, _express2.default)();

// server.use(express.static('build'));
server.get('/*', _index2.default);

server.listen(8080, function () {
  console.log('Server running on port 8080');
});
