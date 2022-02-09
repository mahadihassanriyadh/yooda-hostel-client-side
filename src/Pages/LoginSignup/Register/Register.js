import React, { useState } from 'react';
import Header from '../../Header/Header';
import { useForm } from "react-hook-form";
import { Container, Link, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Register = () => {
    const { registerUser, isLoading, error, setError } = useFirebase();
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();


    const handleRegisterSubmit = data => {
        console.log(data)
        registerUser(data.email, data.password, data.name, navigate);
        setSuccess(true);
        setTimeout(()=>setSuccess(false), 5000)
    };
    
    return (
        <div>
            <Header></Header>
            <Container>
                <Typography variant="h2" gutterBottom component="div">
                    Register
                </Typography>
                <form className="loginForm" onSubmit={handleSubmit(handleRegisterSubmit)}>
                    <input {...register("name")} placeholder="Type your name" required />
                    <input type="email" {...register("email")} placeholder="Type your email" required />
                    <input type="password" {...register("password")} placeholder="Type your password" required />
                    <input className="loginSubmit" value="Register" type="submit"/>
                </form>
                <div className="register-now-msg">
                    <Typography variant="button" gutterBottom component="div">
                        Already a Membber? <NavLink className="register-now" to="/login">Log In Now</NavLink>
                    </Typography>
                </div>
            </Container>            
        </div>
    );
};

export default Register;