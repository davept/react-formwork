(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("lodash/capitalize"), require("lodash/isArray"), require("lodash/isFunction"), require("lodash/isObject"), require("lodash/isString"), require("lodash/isNil"), require("lodash/map"), require("lodash/each"), require("lodash/keys"));
	else if(typeof define === 'function' && define.amd)
		define("react-formwork", ["react", "lodash/capitalize", "lodash/isArray", "lodash/isFunction", "lodash/isObject", "lodash/isString", "lodash/isNil", "lodash/map", "lodash/each", "lodash/keys"], factory);
	else if(typeof exports === 'object')
		exports["react-formwork"] = factory(require("react"), require("lodash/capitalize"), require("lodash/isArray"), require("lodash/isFunction"), require("lodash/isObject"), require("lodash/isString"), require("lodash/isNil"), require("lodash/map"), require("lodash/each"), require("lodash/keys"));
	else
		root["react-formwork"] = factory(root["react"], root["lodash/capitalize"], root["lodash/isArray"], root["lodash/isFunction"], root["lodash/isObject"], root["lodash/isString"], root["lodash/isNil"], root["lodash/map"], root["lodash/each"], root["lodash/keys"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (ComposedComponent, config) {
    var Formwork = function (_Component) {
        _inherits(Formwork, _Component);

        function Formwork(props) {
            _classCallCheck(this, Formwork);

            var _this = _possibleConstructorReturn(this, (Formwork.__proto__ || Object.getPrototypeOf(Formwork)).call(this, props));

            _this.normalizeFormworkElements = function (_ref) {
                var fields = _ref.fields;
                return (0, _isArray2.default)(fields) ? fields : (0, _map2.default)((0, _keys2.default)(fields), function (key) {
                    return { name: key };
                });
            };

            _this.titleFromName = function (name) {
                if ((0, _isNil2.default)(name) || name === '') {
                    return '';
                }

                return (0, _map2.default)(name.split(/(?=[A-Z])|\s/), function (s) {
                    return (0, _capitalize2.default)(s);
                }).join(' ');
            };

            _this.validate = function (inputName) {
                var _ref2 = _this.state.validators[inputName] || {},
                    isValid = _ref2.isValid,
                    message = _ref2.message;

                if (!isValid) {
                    return message;
                }

                return '';
            };

            _this.onBlur = function (e) {
                var _e$target = e.target,
                    name = _e$target.name,
                    value = _e$target.value;

                var stateValidators = _this.state.validators;
                var validator = stateValidators[name];
                var validate = validator.validate;

                var validators = _extends({}, stateValidators, _defineProperty({}, name, _extends({}, validator, { isValid: validate(value) })));

                _this.setState({ validators: validators });
            };

            _this.onChange = function (e) {
                var _e$target2 = e.target,
                    name = _e$target2.name,
                    value = _e$target2.value;

                var form = _extends({}, _this.state.form, _defineProperty({}, name, value));

                _this.setState({ form: form });
            };

            _this.defaultTemplate = function () {
                return function (legendText, inputName, inputControl) {
                    return _react2.default.createElement(
                        'fieldset',
                        { key: inputName, className: 'form-group' },
                        _react2.default.createElement(
                            'legend',
                            null,
                            legendText
                        ),
                        inputControl,
                        _react2.default.createElement(
                            'label',
                            { className: 'formwork-validation-error' },
                            _this.validate(inputName)
                        )
                    );
                };
            };

            _this.defaultInput = function () {
                return function (type, inputName, onChange, data, additionalProperties) {
                    var value = _this.state.form[inputName];
                    var inputClassName = 'form-control';

                    switch (type) {
                        case 'text':
                            return _react2.default.createElement('input', _extends({ type: type, name: inputName, onBlur: _this.onBlur, onChange: onChange, value: value, className: inputClassName }, additionalProperties));
                        case 'select':
                            return _react2.default.createElement(
                                'select',
                                _extends({ name: inputName, onChange: onChange, defaultValue: value || -1, className: inputClassName }, additionalProperties),
                                (0, _isNil2.default)(value) ? _react2.default.createElement('option', { value: -1, disabled: true, hidden: true }) : '',
                                (0, _map2.default)(data, function (option) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: option.key, value: option.key },
                                        option.value
                                    );
                                })
                            );
                        case 'radio':
                            return _react2.default.createElement(
                                'div',
                                null,
                                (0, _map2.default)(data, function (option) {
                                    return [_react2.default.createElement('input', _extends({ type: 'radio', name: inputName, onChange: onChange, key: option.key, value: option.key }, additionalProperties)), option.value, _react2.default.createElement('br', null)];
                                })
                            );
                    }
                };
            };

            _this.state = {
                validators: {},
                form: config.data || {}
            };
            return _this;
        }

        _createClass(Formwork, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var formworkFields = this.normalizeFormworkElements(config);
                var validatorDefinitions = {};
                var validators = {};

                (0, _each2.default)(formworkFields, function (field) {
                    var name = field.name,
                        validator = field.validator;


                    var elementValidator = void 0;
                    if ((0, _isObject2.default)(validator)) {
                        elementValidator = validator;
                        validatorDefinitions[name] = validator;
                    } else if ((0, _isString2.default)(validator)) {
                        elementValidator = validatorDefinitions[validator];
                    } else {
                        elementValidator = { validate: function validate(v) {
                                return true;
                            }, message: '' };
                    }

                    validators[name] = _extends({}, elementValidator, { isValid: true });
                });

                this.setState({ validators: validators });
            }
        }, {
            key: 'generate',
            value: function generate() {
                var _this2 = this;

                var _config$titles = config.titles,
                    titles = _config$titles === undefined ? {} : _config$titles;

                var formworkFields = this.normalizeFormworkElements(config);
                var templateDefinitions = {};
                var fields = [];
                var fieldsByName = {};

                (0, _each2.default)(formworkFields, function (field) {
                    var name = field.name,
                        template = field.template,
                        _field$type = field.type,
                        type = _field$type === undefined ? 'text' : _field$type,
                        _field$input = field.input,
                        input = _field$input === undefined ? _this2.defaultInput() : _field$input,
                        _field$title = field.title,
                        title = _field$title === undefined ? titles[name] || _this2.titleFromName(name) : _field$title,
                        rest = _objectWithoutProperties(field, ['name', 'template', 'type', 'input', 'title']);

                    var generateTemplate = void 0;
                    if ((0, _isFunction2.default)(template)) {
                        generateTemplate = template;
                        templateDefinitions[name] = template;
                    } else if ((0, _isString2.default)(template)) {
                        generateTemplate = templateDefinitions[template];
                    } else {
                        generateTemplate = _this2.defaultTemplate();
                    }

                    var formElement = generateTemplate(title, name, input(type, name, _this2.onChange, field.data, rest));

                    fields.push(formElement);
                    fieldsByName[name] = formElement;
                });

                return {
                    fields: fields,
                    fieldsByName: fieldsByName,
                    submit: _react2.default.createElement(
                        'button',
                        { type: 'submit' },
                        'Submit'
                    )
                };
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { formwork: _extends({}, this.generate(), { data: this.state.form }) }));
            }
        }]);

        return Formwork;
    }(_react.Component);

    return Formwork;
};

var _react = __webpack_require__(1);

var _react2 = _interopRequireDefault(_react);

var _capitalize = __webpack_require__(2);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _isArray = __webpack_require__(3);

var _isArray2 = _interopRequireDefault(_isArray);

var _isFunction = __webpack_require__(4);

var _isFunction2 = _interopRequireDefault(_isFunction);

var _isObject = __webpack_require__(5);

var _isObject2 = _interopRequireDefault(_isObject);

var _isString = __webpack_require__(6);

var _isString2 = _interopRequireDefault(_isString);

var _isNil = __webpack_require__(7);

var _isNil2 = _interopRequireDefault(_isNil);

var _map = __webpack_require__(8);

var _map2 = _interopRequireDefault(_map);

var _each = __webpack_require__(9);

var _each2 = _interopRequireDefault(_each);

var _keys = __webpack_require__(10);

var _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("lodash/capitalize");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("lodash/isArray");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("lodash/isFunction");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/isObject");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("lodash/isString");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("lodash/isNil");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("lodash/map");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash/each");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash/keys");

/***/ })
/******/ ]);
});