import React from 'react'
import {connect} from 'react-redux'
import Formwork from 'react-formwork'

class editRecording extends React.Component {
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
    recording: state.records.recording
}))(Formwork(editRecording, {
    fields: 'recording',
    data:  'recording'
}));
