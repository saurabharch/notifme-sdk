'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _objectWithoutProperties2 = require('babel-runtime/helpers/objectWithoutProperties');

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

exports.default = factory;

var _webhook = require('./webhook');

var _webhook2 = _interopRequireDefault(_webhook);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

var _notificationCatcher = require('./notificationCatcher');

var _notificationCatcher2 = _interopRequireDefault(_notificationCatcher);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Types
function factory(_ref) {
  var type = _ref.type,
      config = (0, _objectWithoutProperties3.default)(_ref, ['type']);

  switch (type) {
    // Development
    case 'logger':
      return new _logger2.default(config, 'webhook');

    case 'notificationcatcher':
      return new _notificationCatcher2.default('webhook');

    // Custom
    case 'custom':
      return config;

    // Providers
    case 'webhook':
      return new _webhook2.default();

    default:
      throw new Error('Unknown webhook provider "' + type + '".');
  }
}