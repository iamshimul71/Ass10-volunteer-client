import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import Login from '../GoogleSignIn/Login';
import { Button,Form,FormGroup } from 'react-bootstrap';
import './Register.css'
import logo from '../../images/logo.png'

const Register = () => {
    const [loggedInUser,setLoggedinUser] = useContext(userContext)
        const {id} = useParams()
    const [vol,setNewvol] = useState({})
    
   

    useEffect(()=>{
        fetch(`http://localhost:5000/volunteerSingleList/${id}`)
        .then(res=>res.json())
        .then(data=>setNewvol(data))
    },[])
    return (
        <div className="w-25 mt-5 registerstyle">
            <img className="w-50 ml-5" src={logo} alt=""/>
            <h4>Register As a Volunteer</h4>
        
        <Form >
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Full Name </Form.Label>
          <Form.Control type="text" value={loggedInUser.name} />
          <Form.Label>Email  </Form.Label>
          <Form.Control type="email" value={loggedInUser.email} />
          <Form.Label>Date </Form.Label>
          <Form.Control type="text" value="" />
          <Form.Label>Descreption </Form.Label>
          <Form.Control type="text" value="" /><br/>
          
          <Form.Control type="text" value={vol.work} />
          
        </Form.Group>
      
        
        <Button className="bg" variant="primary" type="submit">
          Registration
        </Button>
      </Form>

      
    </div>

       



       
    );
};

export default Register;