(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-formwork", [], factory);
	else if(typeof exports === 'object')
		exports["react-formwork"] = factory();
	else
		root["react-formwork"] = factory();
})(this, function() {
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

            _this.normalizeConfig = function (keyOrConfig) {
                return (0, _isString2.default)(keyOrConfig) ? _this.props[keyOrConfig] : keyOrConfig;
            };

            _this.normalizeFormworkFields = function (_ref) {
                var fields = _ref.fields;

                var formworkFields = _this.normalizeConfig(fields);

                return (0, _isArray2.default)(formworkFields) ? formworkFields : (0, _map2.default)((0, _keys2.default)(formworkFields), function (key) {
                    return { name: key };
                });
            };

            _this.elementCss = function (style) {
                if ((0, _isObject2.default)(style)) {
                    return { style: style };
                }

                if ((0, _isString2.default)(style)) {
                    return { className: style };
                }

                return {};
            };

            _this.err = function (name) {
                var _ref2 = _this.state.validators[name] || {},
                    isValid = _ref2.isValid,
                    message = _ref2.message;

                if (isValid) {
                    return '';
                }

                return message;
            };

            _this.validate = function (name, value) {
                var stateValidators = _this.state.validators;
                var validator = stateValidators[name];
                var validate = validator.validate;

                var validators = _extends({}, stateValidators, _defineProperty({}, name, _extends({}, validator, {
                    isValid: validate(value),
                    isTouched: true
                })));
                var isFormValid = true;
                (0, _each2.default)(validators, function (v) {
                    return isFormValid = isFormValid && v.isValid;
                });

                _this.setState({ validators: validators, isFormValid: isFormValid });
            };

            _this.onBlur = function (e) {
                var _e$target = e.target,
                    name = _e$target.name,
                    value = _e$target.value;

                _this.validate(name, value);
            };

            _this.onChange = function (e) {
                var _e$target2 = e.target,
                    name = _e$target2.name,
                    value = _e$target2.value;

                var form = _extends({}, _this.state.form, _defineProperty({}, name, value));
                var isTouched = _this.state.validators[name].isTouched;

                _this.setState({ form: form }, function () {
                    if (isTouched) {
                        _this.validate(name, value);
                    }
                });
            };

            _this.defaultTemplate = function () {
                return function (legendText, inputName, inputControl) {
                    var fieldSetCss = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
                    var legendCss = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};
                    var errorCss = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : {};
                    return _react2.default.createElement(
                        'fieldset',
                        _extends({ key: inputName }, fieldSetCss),
                        _react2.default.createElement(
                            'legend',
                            legendCss,
                            legendText
                        ),
                        inputControl,
                        _react2.default.createElement(
                            'label',
                            errorCss,
                            _this.err(inputName)
                        )
                    );
                };
            };

            _this.defaultInput = function () {
                return function (type, inputName, onChange, data, css, additionalProperties) {
                    var value = _this.state.form[inputName] || '';

                    switch (type) {
                        case 'select':
                            return _react2.default.createElement(
                                'select',
                                _extends({ name: inputName, onChange: onChange,
                                    defaultValue: value || -1 }, css, additionalProperties),
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
                                    return [_react2.default.createElement('input', _extends({ type: 'radio', name: inputName, onChange: onChange, key: option.key,
                                        value: option.key }, additionalProperties)), option.value, _react2.default.createElement('br', null)];
                                })
                            );
                        default:
                            return _react2.default.createElement('input', _extends({ type: type, name: inputName, onBlur: _this.onBlur, onChange: onChange,
                                value: value }, css, additionalProperties));
                    }
                };
            };

            _this.state = {
                validators: {},
                form: _this.normalizeConfig(config.data) || {}
            };
            return _this;
        }

        _createClass(Formwork, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var formworkFields = this.normalizeFormworkFields(config);
                var validatorDefinitions = {};
                var validators = {};
                var form = this.state.form;

                var isFormValid = true;

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

                    isFormValid = isFormValid && elementValidator.validate(form[name] || '');

                    validators[name] = _extends({}, elementValidator, {
                        isValid: true,
                        isTouched: false
                    });
                });

                this.setState({ validators: validators, isFormValid: isFormValid });
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                if ((0, _isString2.default)(config.data)) {
                    var form = nextProps[config.data];

                    this.setState({ form: form });
                }
            }
        }, {
            key: 'titleFromName',
            value: function titleFromName(name) {
                if ((0, _isNil2.default)(name) || name === '') {
                    return '';
                }

                return (0, _map2.default)(name.split(/(?=[A-Z])|\s/), function (s) {
                    return (0, _capitalize2.default)(s);
                }).join(' ');
            }
        }, {
            key: 'generate',
            value: function generate() {
                var _this2 = this;

                var _config$titles = config.titles,
                    titles = _config$titles === undefined ? {} : _config$titles,
                    _config$css = config.css,
                    css = _config$css === undefined ? {} : _config$css;

                var formworkFields = this.normalizeFormworkFields(config);
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

                    delete rest.validator;

                    var generateTemplate = void 0;
                    if ((0, _isFunction2.default)(template)) {
                        generateTemplate = template;
                        templateDefinitions[name] = template;
                    } else if ((0, _isString2.default)(template)) {
                        generateTemplate = templateDefinitions[template];
                    } else {
                        generateTemplate = _this2.defaultTemplate();
                    }

                    var formElement = generateTemplate(title, name, input(type, name, _this2.onChange, field.data, _this2.elementCss(css.input), rest), _this2.elementCss(css.fieldset), _this2.elementCss(css.legend), _this2.elementCss(css.error));

                    fields.push(formElement);
                    fieldsByName[name] = formElement;
                });

                return {
                    fields: fields,
                    fieldsByName: fieldsByName,
                    submit: _react2.default.createElement(
                        'button',
                        _extends({ type: 'submit', disabled: !this.state.isFormValid }, this.elementCss(css.submit)),
                        'Submit'
                    )
                };
            }
        }, {
            key: 'render',
            value: function render() {
                return _react2.default.createElement(ComposedComponent, _extends({}, this.props, { formwork: _extends({}, this.generate(), {
                        data: this.state.form,
                        isFormValid: this.state.isFormValid,
                        name: config.name || ''
                    }) }));
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