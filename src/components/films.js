import React from 'react';
import {Link} from 'react-router-dom';



const Films = (props) => (
    

    <div className="main-content">
        
        <div className="container">
            <h2>Oscar Winner</h2>
                <li>Titanic</li>
                <li>Harry Potter</li>
                <li>Joker</li>
                <li>Jurasic Park</li>
        </div>
        <div><Link className="back" to="/">Back</Link></div>
        </div>
);

export default Films;