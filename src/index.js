import React, {Component} from 'react'
import capitalize from 'lodash/capitalize'
import isArray from 'lodash/isArray'
import isFunction from 'lodash/isFunction'
import isObject from 'lodash/isObject'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'
import map from 'lodash/map'
import each from 'lodash/each'
import keys from 'lodash/keys'

export default function (ComposedComponent, config) {
    class Formwork extends Component {
        constructor(props) {
            super(props);

            this.state = {
                validators: {},
                form: config.data || {}
            };
        }

        normalizeFormworkFields = ({fields}) => isArray(fields) ? fields : map(keys(fields), key => ({name: key}));

        componentDidMount() {
            const formworkFields = this.normalizeFormworkFields(config);
            const validatorDefinitions = {};
            const validators = {};
            const {form} = this.state;
            let isFormValid = true;

            each(formworkFields, field => {
                const {name, validator} = field;

                let elementValidator;
                if (isObject(validator)) {
                    elementValidator = validator;
                    validatorDefinitions[name] = validator;
                } else if (isString(validator)) {
                    elementValidator = validatorDefinitions[validator];
                } else {
                    elementValidator = {validate: v => true, message: ''};
                }

                isFormValid = isFormValid && elementValidator.validate(form[name] || '');

                validators[name] = {
                    ...elementValidator,
                    isValid: true,
                    isTouched: false
                };
            });

            this.setState({validators, isFormValid});
        }

        titleFromName(name) {
            if (isNil(name) || name === '') {
                return '';
            }

            return map(name.split(/(?=[A-Z])|\s/), s => capitalize(s)).join(' ');
        }

        elementCss = style => {
            if (isObject(style)) {
                return {style};
            }

            if (isString(style)) {
                return {className: style};
            }

            return {};
        };

        err = name => {
            const {isValid, message} = this.state.validators[name] || {};
            if (isValid) {
                return '';
            }

            return message;
        };

        validate = (name, value) => {
            const stateValidators = this.state.validators;
            const validator = stateValidators[name];
            const {validate} = validator;
            const validators = {
                ...stateValidators,
                [name]: {
                    ...validator,
                    isValid: validate(value),
                    isTouched: true
                }
            };
            let isFormValid = true;
            each(validators, v => isFormValid = isFormValid && v.isValid);

            this.setState({validators, isFormValid});
        };

        onBlur = e => {
            const {name, value} = e.target;
            this.validate(name, value);
        };

        onChange = e => {
            const {name, value} = e.target;
            const form = {...this.state.form, [name]: value};
            const {isTouched} = this.state.validators[name];
            this.setState({form}, () => {
                if (isTouched) {
                    this.validate(name, value);
                }
            });
        };

        defaultTemplate = () => (legendText, inputName, inputControl, fieldSetCss = {}, legendCss = {}, errorCss = {}) =>
            <fieldset key={inputName} {...fieldSetCss}>
                <legend {...legendCss}>{legendText}</legend>
                {inputControl}
                <label {...errorCss}>{this.err(inputName)}</label>
            </fieldset>;

        defaultInput = () => (type, inputName, onChange, data, css, additionalProperties) => {
            const value = this.state.form[inputName] || '';

            switch (type) {
                case 'select':
                    return <select name={inputName} onChange={onChange}
                                   defaultValue={value || -1} {...css} {...additionalProperties}>
                        {isNil(value) ? <option value={-1} disabled hidden/> : ''}
                        {map(data, option => <option key={option.key} value={option.key}>{option.value}</option>)}
                    </select>;
                case 'radio':
                    return <div>
                        {map(data, option => [
                            <input type="radio" name={inputName} onChange={onChange} key={option.key}
                                   value={option.key} {...additionalProperties}/>,
                            option.value,
                            <br/>
                        ])}
                    </div>;
                default:
                    return <input type={type} name={inputName} onBlur={this.onBlur} onChange={onChange}
                                  value={value} {...css} {...additionalProperties}/>;
            }
        };

        generate() {
            const {titles = {}, css = {}} = config;
            const formworkFields = this.normalizeFormworkFields(config);
            const templateDefinitions = {};
            const fields = [];
            const fieldsByName = {};

            each(formworkFields, field => {
                const {
                    name,
                    template,
                    type = 'text',
                    input = this.defaultInput(),
                    title = titles[name] || this.titleFromName(name),
                    ...rest
                } = field;

                delete rest.validator;

                let generateTemplate;
                if (isFunction(template)) {
                    generateTemplate = template;
                    templateDefinitions[name] = template;
                } else if (isString(template)) {
                    generateTemplate = templateDefinitions[template];
                } else {
                    generateTemplate = this.defaultTemplate();
                }

                const formElement = generateTemplate(
                    title,
                    name,
                    input(type, name, this.onChange, field.data, this.elementCss(css.input), rest),
                    this.elementCss(css.fieldset),
                    this.elementCss(css.legend),
                    this.elementCss(css.error));

                fields.push(formElement);
                fieldsByName[name] = formElement;
            });

            return {
                fields,
                fieldsByName,
                submit: <button type="submit" disabled={!this.state.isFormValid} {...this.elementCss(css.submit)}>
                    Submit</button>
            };
        }

        render() {
            return <ComposedComponent {...this.props} formwork={{
                ...this.generate(),
                data: this.state.form,
                isFormValid: this.state.isFormValid,
                name: config.name || ''
            }}/>
        }
    }

    return Formwork;
}
