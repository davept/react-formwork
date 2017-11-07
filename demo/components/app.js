import React from 'react';
import menu from './menu'

const App = (props) =>
<div>
    <h1>Boo</h1>
    <menu />
    {props.children}
</div>;

export default App;
