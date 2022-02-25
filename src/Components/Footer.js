import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';



class Footer extends React.Component {
    
    render() { 
        return (
        <div className="Footer">
             <Container className='p-3 d-flex text-align-center w-100 justify-content-center align-items-center'>
                 <h6>Made by Marija HAVAIC</h6>
             </Container>
        </div>
        )
    }
}

export default Footer;