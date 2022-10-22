import React,{useContext} from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Contexts/AuthProvider";


const Login = () => {
 
  const {loginUser}=useContext(AuthContext)
    const handleSubmit=event=>{
        event.preventDefault();
        const form=event.target
        const email=form.email.value
        const password=form.password.value
        console.log(email,password);
        loginUser(email,password)
        .then(result =>{
          const user =result.user
          console.log(user);
        })
        .catch(error =>{
          console.log(error);
        })
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

      <Form.Text className="text-muted">
         
        </Form.Text>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
    <br />
    <Link>Forget Password</Link>
    <br />
    <br />
    <p>You have no account <Link to='/register'>Please Registered</Link></p>
        </div>
    );
};

export default Login;