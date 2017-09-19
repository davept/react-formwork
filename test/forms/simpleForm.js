import React, { Component } from 'react'
import Formwork from '../../src'

class SimpleForm extends Component {
    render() {
        const {elements, submit} = this.props.formwork;

        return (
            <div>
                <form name="simple-form">
                    {elements}
                    {submit}
                </form>
            </div>
        )
    }
}

const model = {
    name: 'David',
    email: 'a@b.c'
};

export default Formwork(SimpleForm, {
    elements: model
});
