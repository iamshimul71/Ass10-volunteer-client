import React from 'react';
import { Button,Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './NetVolunteer.css'

const NetVolunterDataLoad = (props) => {
    const {_id,id,work,img} = props.alldata
    return (
        <div>
            <div className="container con ml-3 my-2 float-left ">
            <Card className="" style={{ width: '19rem' }}>
            <Link to={`/Register/${_id}`}> 
            <Card.Img variant="top" src={img}/>
            </Link>
           
  
  <Card.Body className="text-color">
    
    <Card.Text >
       
    {work}
    </Card.Text>
   
  </Card.Body>
</Card>
             </div> 
        </div>
    );
};

export default NetVolunterDataLoad;