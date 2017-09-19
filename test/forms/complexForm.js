import React, {Component} from 'react'
import Formwork from '../../src'

class ComplexForm extends Component {
    onSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        const {elements, elementsByName, data, submit} = this.props.formwork;
        return (
            <div>
                <form name="form01" onSubmit={this.onSubmit}>
                    {elements}
                    <div>
                        <p>Can we get an individual element by name?</p>
                        {elementsByName['email']}
                    </div>
                    {submit}
                </form>
                <pre>{JSON.stringify(data, null, 2)}</pre>
            </div>
        )
    }
}

export default Formwork(ComplexForm, {
    elements: [
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
            name: 'heardOfUs2',
            type: 'radio',
            data: [
                { key: 1, value: 'Radio' },
                { key: 2, value: 'TV' },
                { key: 3, value: 'Web' }
            ]
        }
    ],
    data: {
        name: 'David',
        email: 'a@b.c',
        jobTitle: 'Developer',
        nationalInsuranceNumber: 'abc123'
    }
});
