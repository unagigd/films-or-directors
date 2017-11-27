// const express = require('express')
import express from 'express'
import renderPage from './server/index.jsx'

const server = express();

// server.use(express.static('build'));
server.get('/*', renderPage);

server.listen(8080, () => {
  console.log('Server running on port 8080');
})