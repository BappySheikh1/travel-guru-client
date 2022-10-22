import React, { useState } from 'react';
import './Register.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const Register = () => {
    const [accetived,setAccetived]=useState(false)
  
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password);

    }
  

    return (
        <div className='w-50 mx-auto my-5 border p-5 rounded'>
               <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>

      <Form.Text className="text-muted">
         
        </Form.Text>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Register;