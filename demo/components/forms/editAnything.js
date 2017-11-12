import React from 'react'
import {connect} from 'react-redux'
import {map} from 'lodash'
import {edit} from '../../actions/records'
//import Formwork from 'react-formwork'
import Formwork from '../../../src'

class editAnything extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    dataSets = () => map(['artist', 'label', 'recording'], dataSet => <button key={dataSet} onClick={() => this.props.edit(dataSet)}>{dataSet}</button>);

    render() {
        const {fields, fieldsByName, data, submit} = this.props.formwork;

        return (
            <div>
                <div>
                    {this.dataSets()}
                </div>
                <div>
                    <h3>{this.props.setName}</h3>
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
    setName: state.records.dataSet,
    dataSet: state.records[state.records.dataSet]
}), {
    edit
})(Formwork(editAnything, {
    fields: 'dataSet',
    data:  'dataSet'
}));
