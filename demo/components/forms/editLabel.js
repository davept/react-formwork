import React from 'react'
import {connect} from 'react-redux'
import Formwork from 'react-formwork'

class editLabel extends React.Component {
    render() {
        const {fields} = this.props.formwork;

        return (
            <div>
                {fields}
            </div>
        )
    }
}

export default connect(state => ({
    label: state.records.label
}))(Formwork(editLabel, {
    fields: 'label',
    data:  'label'
}));
