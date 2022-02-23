import React from 'react';
import './Style/Skills.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faJs, faBootstrap, faFontAwesome, faReact, faFigma } from '@fortawesome/free-brands-svg-icons';
import { faImage, faImages, faObjectGroup, faPencilRuler, faClone, faRoute } from '@fortawesome/free-solid-svg-icons'

class Skills extends React.Component {
    
    render() { 
        return (
        <div className="Skills">
            <div className='frontend-container'>
                <h1>Front-End</h1>
                <div className='icons'>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faHtml5} />
                        <p>HTML 5</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faCss3Alt} />
                        <p>CSS 3</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faJs} />
                        <p>JavaScript</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faReact} />
                        <p>React JS</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faRoute} />
                        <p>React Router</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faBootstrap} />
                        <p>Bootstrap 5</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faFontAwesome} />
                        <p>FontAwesome</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faClone} />
                        <p>Material UI</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='design-container'>
                <h1>Design</h1>
                <div className='icons'>
                    <ul>
                        <li>
                        <FontAwesomeIcon icon={faFigma} />
                        <p>Figma</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faObjectGroup} />
                        <p>Adobe XD</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faImage} />
                        <p>Photoshop</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faImages} />
                        <p>Lightroom</p>
                        </li>
                        <li>
                        <FontAwesomeIcon icon={faPencilRuler} />
                        <p>Illustrator</p>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        )
    }
}

export default Skills;