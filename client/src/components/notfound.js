import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from './images/notfound.jpg';
const NotFound = () => (
<div>
<img src={PageNotFound} style={{width: 600, height: 600, display: 'block', margin: 'auto', position: 'relative' }} />
<center><Link to="/">Return to Home Page</Link></center>
</div>
);
export default NotFound;