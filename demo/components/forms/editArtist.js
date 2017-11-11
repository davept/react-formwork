import React from 'react'
import {connect} from 'react-redux'
import Formwork from 'react-formwork'

class editArtist extends React.Component {
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
    artist: state.records.artist
}))(Formwork(editArtist, {
    fields: 'artist',
    data:  'artist'
}));
