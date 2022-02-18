"use strict";

var _express = _interopRequireDefault(require("express"));

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _config = require("../config");

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.listen(_config.port, () => {
  console.log(`listening on post ${_config.port}`);
});
app.use((0, _cors.default)(), _bodyParser.default.urlencoded({
  extended: true
}), _bodyParser.default.json());

if (process.env.NODE_ENV === 'production') {
  app.use(_express.default.static(_path.default.resolve(__dirname, '../../dist')));
  app.get('/*', (req, res) => {
    res.sendFile(_path.default.resolve('index.html'));
  });
}

app.get('/', (req, res) => {
  res.send('Hello world!!');
});
app.post('/task', async (req, res) => {
  const newArray = [{
    id: 'u1',
    name: 'user-1'
  }, {
    id: 'u2',
    name: 'user-2'
  }];
  res.status(200).send(newArray);
});
//# sourceMappingURL=server.js.map