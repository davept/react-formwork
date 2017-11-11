import React from 'react'
import {Link} from 'react-router-dom'

const menu = () => <ul>
    <li>Login</li>
    <li>Edit Address & Submit to Redux</li>
    <li><Link to="/form1">Edit Ad Hoc</Link></li>
    <li><Link to="/editArtist">Edit Artist</Link></li>
    <li><Link to="/editLabel">Edit Label</Link></li>
    <li><Link to="/editRecording">Edit Recording</Link></li>
    <li><Link to="/editArtist">Edit Anything</Link></li>
</ul>;

export default menu;
