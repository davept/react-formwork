import React from 'react'
import {Link} from 'react-router-dom'

const menu = () => <ul>
    <li><Link to="/editArtist">Edit Artist</Link></li>
    <li><Link to="/editLabel">Edit Label</Link></li>
    <li><Link to="/editRecording">Edit Recording</Link></li>
    <li><Link to="/editAnything">Edit Anything</Link></li>
    <li>Edit & Submit to Redux</li>
</ul>;

export default menu;
