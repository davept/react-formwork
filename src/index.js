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

        normalizeFormworkElements = ({fields}) => isArray(fields) ? fields : map(keys(fields), key => ({name: key}));

        componentDidMount() {
            const formworkFields = this.normalizeFormworkElements(config);
            const validatorDefinitions = {};
            const validators = {};

            each(formworkFields, field => {
                const {name, validator} = field;

                let elementValidator;
                if (isObject(validator)) {
                    elementValidator = validator;
                    validatorDefinitions[name] = validator;
                } else if (isString(validator)) {
                    elementValidator = validatorDefinitions[validator];
                } else {
                    elementValidator = { validate: v => true, message: ''};
                }

                validators[name] = {...elementValidator, isValid: true};
            });

            this.setState({validators});
        }

        titleFromName = name => {
            if (isNil(name) || name === '') {
                return '';
            }

            return map(name.split(/(?=[A-Z])|\s/), s => capitalize(s)).join(' ');
        };

        validate = inputName => {
            const {isValid, message} = this.state.validators[inputName] || {};
            if (!isValid) {
                return message;
            }

            return '';
        };

        onBlur = e => {
            const {name, value} = e.target;
            const stateValidators = this.state.validators;
            const validator = stateValidators[name];
            const {validate} = validator;
            const validators = {...stateValidators, [name]: {...validator, isValid: validate(value)}};

            this.setState({validators});
        };

        onChange = e => {
            const {name, value} = e.target;
            const form = {...this.state.form, [name]: value};

            this.setState({form});
        };

        defaultTemplate = () => (legendText, inputName, inputControl) =>
            <fieldset key={inputName} className="form-group">
                <legend>{legendText}</legend>
                {inputControl}
                <label className="formwork-validation-error">{this.validate(inputName)}</label>
            </fieldset>;

        defaultInput = () => (type, inputName, onChange, data, additionalProperties) => {
            const value = this.state.form[inputName];
            const inputClassName = 'form-control';

            switch (type) {
                case 'text':
                    return <input type={type} name={inputName} onBlur={this.onBlur} onChange={onChange} value={value} className={inputClassName} {...additionalProperties}/>;
                case 'select':
                    return <select name={inputName} onChange={onChange} defaultValue={value || -1} className={inputClassName} {...additionalProperties}>
                        {isNil(value) ? <option value={-1} disabled hidden/> : ''}
                        {map(data, option => <option key={option.key} value={option.key}>{option.value}</option>)}
                    </select>;
                case 'radio':
                    return <div>
                        {map(data, option => [
                            <input type="radio" name={inputName} onChange={onChange} key={option.key} value={option.key} {...additionalProperties}/>,
                            option.value,
                            <br/>
                        ])}
                    </div>
            }
        };

        generate() {
            const {titles = {}} = config;
            const formworkFields = this.normalizeFormworkElements(config);
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

                let generateTemplate;
                if (isFunction(template)) {
                    generateTemplate = template;
                    templateDefinitions[name] = template;
                } else if (isString(template)) {
                    generateTemplate = templateDefinitions[template];
                } else {
                    generateTemplate = this.defaultTemplate();
                }

                const formElement = generateTemplate(title, name, input(type, name, this.onChange, field.data, rest));

                fields.push(formElement);
                fieldsByName[name] = formElement;
            });

            return {
                fields,
                fieldsByName,
                submit: <button type="submit">Submit</button>
            };
        }

        render() {
            return <ComposedComponent {...this.props} formwork={{...this.generate(), data: this.state.form}}/>
        }
    }

    return Formwork;
}
