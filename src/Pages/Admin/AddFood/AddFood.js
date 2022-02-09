import React from 'react';
import { useForm } from "react-hook-form";
import { Container, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const AddFood = () => {
    const { register, handleSubmit } = useForm();
    const { user, loginUser, error, isLoading, signInWithGoogle, logout } = useFirebase();

    const onSubmit = data => {
        console.log(data)
    };
    return (
        <div>
            <Container>
                <Typography variant="h2" gutterBottom component="div">
                    Add Food
                </Typography>
                <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
                    {/* <input {...register("name")} placeholder="Type your name" required /> */}
                    <input type="text" {...register("food-name")} placeholder="Food Name" required />
                    <input type="number" {...register("price")} placeholder="Price" required />
                    <input className="loginSubmit" value="Add Food" type="submit"/>
                </form>
            </Container>
        </div>
    );
};

export default AddFood;