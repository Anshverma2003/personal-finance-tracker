import React, { useState } from 'react';
import './signup.css';
import pic1 from "../../assets/signUpimage.jpg";
import pic2 from "../../assets/Personal Finance-logos_white.png";
import { useHistory } from 'react-router-dom';

const Signup = () => {

    const history = useHistory();

    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        dateOfBirth: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm(formData);
        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            history.push('/');
        } else {
            setErrors(errors);
        }
    };

    const validateForm = (formData) => {
        const errors = {};
        if (!formData.name.trim()) {
            errors.name = 'Name is required';
        }
        
        if (!formData.username.trim()) {
            errors.username = 'Username is required';
        }

        if (!formData.email.trim()) {
            errors.email = 'Email is required';
        } else if (!isValidEmail(formData.email)) {
            errors.email = 'Invalid email format';
        }

        if (!formData.dateOfBirth) {
            errors.dateOfBirth = "D.O.B is required"
        }

        if (!formData.password.trim()) {
            errors.password = 'Password is required';
        }

        if (!formData.confirmPassword.trim()) {
            errors.confirmPassword = 'Confirm password is required';
        } else if (formData.password !== formData.confirmPassword) {
            errors.confirmPassword = 'Passwords do not match';
        }

        return errors;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <div className="signUp">
            <img src={pic1} alt="" />
            <div className='mainWrap'>
                <div className="leftContent">
                    <img src={pic2} alt="" />
                </div>
                <div className="rightContent">
                    <form onSubmit={handleSubmit}>

                        <label>Name</label>
                        <input type='text' name="name" value={formData.name} onChange={handleChange} placeholder='Full Name' />
                        {errors.name && <span className="error">{errors.name}</span>}

                        <label>User Name</label>
                        <input type='text' name="username" value={formData.username} onChange={handleChange} placeholder='User Name' />
                        {errors.username && <span className="error">{errors.username}</span>}

                        <label>Email</label>
                        <input type='text' name="email" value={formData.email} onChange={handleChange} placeholder='Email address' />
                        {errors.email && <span className="error">{errors.email}</span>}

                        <label>D.O.B</label>
                        <input type="date" name="dateOfBirth" onChange={handleChange} />
                        {errors.dateOfBirth && <span className='error'>{errors.dateOfBirth}</span>}

                        <label>Password</label>
                        <input type='password' name="password" value={formData.password} onChange={handleChange} placeholder='Password' />
                        {errors.password && <span className="error">{errors.password}</span>}

                        <label>Confirm Password</label>
                        <input type='password' name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} placeholder='Confirm Password' />
                        {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}

                        <input type="submit" value="Get Started" />
                        <p className='returnLogin'>Already have an account? <a href="/login">Log in</a></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup;
