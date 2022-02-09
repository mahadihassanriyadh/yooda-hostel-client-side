import React from 'react';
import Header from '../../Header/Header';
import { useForm } from "react-hook-form";
import { Container, Link, Typography } from '@mui/material';
import './login.css'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const { user, loginUser, error, isLoading, signInWithGoogle, logout } = useFirebase();

    const location = useLocation();
    const navigate = useNavigate();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, navigate);
    };

    return (
        <div>
            <Header></Header>
            <Container>
                <Typography variant="h2" gutterBottom component="div">
                    Login
                </Typography>
                <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("name")} placeholder="Type your name" required /> */}
                    <input type="email" {...register("email")} placeholder="Type your email" required />
                    <input type="password" {...register("password")} placeholder="Type your password" required />
                    <input className="loginSubmit" value="Login" type="submit"/>
                </form>
                <div className="register-now-msg">
                    <Typography variant="button" gutterBottom component="div">
                        Not registered? <NavLink className="register-now" to="/register">Register Now</NavLink>
                    </Typography>
                </div>
            </Container>
        </div>
    );
};

export default Login;