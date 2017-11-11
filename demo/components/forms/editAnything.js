import React from 'react'
import {connect} from 'react-redux'
import {map} from 'lodash'
//todo DT put this back when we're done!
//import Formwork from 'react-formwork'
import Formwork from '../../../src/'

class editAnything extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = { dataSet: 'artist'};
    }

    dataSets = () => map(['artist', 'label', 'recording'], dataSet => <button key={dataSet} onClick={() => this.setState({dataSet})}>{dataSet}</button>);

    render() {
        const {fields, fieldsByName, data, submit} = this.props.formwork;

        return (
            <div>
                <div>
                    {this.dataSets()}
                </div>
                <div>
                    <h3>{this.state.dataSet}</h3>
                {fields}
                </div>
                <pre>
                    {JSON.stringify(this.props.artist, null, 2)}
                </pre>
            </div>
        )
    }
}

export default connect(state => ({
    dataSet: state.records.artist,
    label: state.records.label,
    recording: state.records.recording
}))(Formwork(editAnything, {
    fields: 'dataSet',
    data:  'dataSet'
}));
