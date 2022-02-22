import React from 'react';
import './Style/Skills.css'

import 'bootstrap/dist/css/bootstrap.min.css';

class Skills extends React.Component {
    
    render() { 
        return (
        <div className="Skills">
            <div className='frontend-container'>
                <h1>Front-End</h1>
            </div>
            <div className='design-container'>
                <h1>Design</h1>
            </div>
        </div>
        )
    }
}

export default Skills;