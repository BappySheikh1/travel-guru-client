import React, { useState,useContext  } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Contexts/AuthProvider";


const Register = () => {
    const [accetived,setAccetived]=useState(false)
    const {createUser,userUpdateProfile}=useContext(AuthContext)
  
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target
        const first=form.first.value
        const last=form.last.value
        const email=form.email.value
        const password=form.password.value
        console.log(last,first,email,password);
        createUser(email,password)
        .then(result =>{
            const user =result.user
            console.log(user);
            handleUserProfile(first)
        })
        .catch(error =>{
            console.log(error);
        })
    }
    
   const handleUserProfile=(first)=>{
    userUpdateProfile(first)
    .then(()=>{

    })
    .catch(error=>{
        console.log(error);
    })
   }

    const handleChecked=event=>{
        setAccetived(event.target.checked)
    }
  

    return (
        <div className='w-50 mx-auto my-5 border p-5 rounded'>
               <Form onSubmit={handleSubmit} className='w-75'>
      <Form.Group className="mb-3" controlId="formBasicFirstName">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" name='first' placeholder="First Name" required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicLastName">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" name='last' placeholder="Last Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox" >
        <Form.Check onClick={handleChecked} type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Text className="text-muted">
         
        </Form.Text>
      <Button variant="primary" type="submit" disabled={!accetived}>
        Register
      </Button>
    </Form>
    <p>you have already an account <Link to='/login'>go Log In</Link></p>
        </div>
    );
};

export default Register;