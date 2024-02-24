import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './login.css';
import pic1 from '../../assets/retrosupply-jLwVAUtLOAQ-unsplash.png';
import link1 from '../../assets/insta.png'
import link2 from '../../assets/facebook.png'
import link3 from '../../assets/twitter.png'
import { useState } from 'react';

const LoginPage = () => {

    const history = useHistory();

    const[formData , setFormData] = useState({
        userName: '',
        password: ''
    });
    
    const handleChange =(e) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const[errors , setErrors] = useState({});

    const handleSubmit = (e) => {

        e.preventDefault();

        const errors = validateErrors(formData);

        if (Object.keys(errors).length === 0) {
            console.log('Form submitted:', formData);
            history.push('/');
        } else {
            setErrors(errors);
        }
    };

    const validateErrors = (formData) => {

        const error = {};

        if(!formData.userName.trim()){
            error.userName = 'User Name is required'
        }
        if(!formData.password.trim()){
            error.password = "Password is required"
        }
        return error;
    };

    return (
        <div className="loginPage">
            <div className="left">
                <img src={pic1} alt="" />
                <div className="gradientOverlay"></div>
                <h1>Personal Finance</h1>

                <div className="leftWrap">

                    <div className="textWrap">
                        <h1>Keep It Special</h1>
                        <p>Track your Personal Finances in a <br /> unique way, anywhere.</p>
                    </div>

                    <div className='links'>
                        <a href="">
                            <img src={link1} className="insta" alt="" />
                        </a>
                        <a href="">
                            <img src={link2} className='facebook' alt="" />
                        </a>
                        <a href="">
                            <img src={link3} className='twitter' alt="" />
                        </a>
                    </div>

                </div>
            </div>

            <div className="right">
                <h2> Welcome <span>Back</span></h2>

                <div className="rightWrarp">

                    <form onSubmit={handleSubmit}>
                        <label></label>
                        <input type='text' name='userName' value={formData.userName}  onChange={handleChange} placeholder='User Name' />
                        {errors.userName && <span className='errors'><p>{errors.userName}</p></span>}

                        <label></label>
                        <input type='password' name='password' value={formData.password} onChange={handleChange} placeholder='Password' autoComplete='off' />
                        {errors.password && <span className='errors'><p>{errors.password}</p></span>}

                        <input type="submit" value="Login"></input>
                    </form>
                </div>
                <p>Don't have an account? <a href="/signup"> Create Account</a></p>
            </div>
        </div>
    );
};

export default LoginPage;
