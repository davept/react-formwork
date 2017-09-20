# React-Formwork

**A ReactJS higher order component (HoC) to generate an HTML form from a Javascript object.**

#### Using:

* Install from npm:

`npm install --save react-formwork`
* Import:

`import Formwork from 'react-formwork'` 
* Wrap a form component with the Formwork HoC:
```jsx harmony
class MyForm extends Component {
    render() {
        const { fields, submit, data } = this.props.formwork;
        return (
            <form>
                {fields}
                {submit}
                <pre>
                    {JSON.stringify(data, null, 2)}
                </pre>
            </form>
        )
    }
}

const model = {
    name: 'David',
    email: 'a@b.c',
    jobTitle: 'Developer'
};

export default Formwork(MyForm, {
    fields: model,
    data: model
});
```

In the example above we pass our JS object `model` to the `Formwork` HoC.  We pull the generated HTML form fields, the submit button and our bound data object from `props.formwork`'

#### Example, accessing elements by name

In case you want to individually place the form fields:
```jsx harmony
class MyForm extends Component {
render() {
        const { fieldsByName } = this.props.formwork;
        return (
            <form>
                <p>Name input:</p>
                {fieldsByName['name']}
                
                <p>Email input:</p>
                {fieldsByName['email']}
                
                <p>Job Title input:</p>
                {fieldsByName['jobTitle']}
            </form>
        )
    }
}
```
#### example, custom titles

```jsx harmony
class MyForm extends Component {
    render() {
        const { fields } = this.props.formwork;
        return (
            <form>
                {fields}
            </form>
        )
    }
}

const model = {
    name: 'David',
    ISBN: '011010010101010'
};

export default Formwork(MyForm, {
    titles: { ISBN: 'ISBN'},
    fields: model,
    data: model
});
```
By default names will be split by capital letter and then capitalised.  When this doesn't work such as `ISBN` becoming `I S B N` you can supply a titles map.

#### Example, customising form elements
To fully customise the form fields instead of depending on default conventions, supply an array of objects to the `fields` property.
```jsx harmony

export default Formwork(MyForm, {
    fields: [
        {
            name: 'name',
            title: 'Given Name:',
            template: (labelText, inputName, inputControl) => <div key={inputName}
                                                                      style={{'border': '2px solid red'}}>
                <p>{labelText}</p><p>{inputName}</p><p>{inputControl}</p></div>,
            validator: {
                    validate: value => value.length > 2,
                    message: 'Length must be greater than 2 characters'
            }
        },
        {
            name: 'email',
            validator: 'name'
        },
        {
            name: 'jobTitle'
        },
        {
            name: 'nationalInsuranceNumber'
        },
        {
            name: 'heardOfUs',
            type: 'select',
            data: [
                { key: 1, value: 'Radio' },
                { key: 2, value: 'TV' },
                { key: 3, value: 'Web' }
            ]
        },
        {
            name: 'industry',
            type: 'radio',
            data: [
                { key: 1, value: 'IT' },
                { key: 2, value: 'Medical' },
                { key: 3, value: 'Leisure' }
            ]
        }
    ]
});
```
This example provides a custom HTML template to wrap the `name` HTML input.  It also provides a custom validator.  Note, the `email` field uses a string `name` as it's validator which refers back to the previously defined validator for the `name` field.  This means you only ever have to define templates and validators one time and then reuse. 

#### Testing

npm run test

#### Create dist build

npm run dist

#### ToDo

* Add functional tests for validation
