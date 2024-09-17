import { LoginForm } from '@vaadin/react-components'
import axios from 'axios';
import config from 'Frontend/config';
import { RootState } from 'Frontend/storage';
import { setToken } from 'Frontend/storage/authSlice';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Login() {

    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<boolean | undefined>(undefined);

    const handleSetToken = (email: string, password: string) => {
        setErrorMessage(undefined);
        axios({
            url: config.baseUrl + '/auth/login',
            method: 'POST',
            data: {
                email: email,   // Changed "username" to "email"
                password: password,
            },
        })
        .then((res) => {
            if (res.status === 200) {
                const resData: any = res.data.data;
                const tokenString: string = resData;
                dispatch(setToken(tokenString));
                navigate('/seller/account');
            } else {
                setErrorMessage(true);
            }
        })
        .catch((exc) => {
            setErrorMessage(true);
        });
    };

    function login(event: any) {
        const { username: email, password } = event.detail;  // Renamed "username" to "email"
        handleSetToken(email, password);
    }

    function forgot(event: any) {
        // Implement forgot password functionality if needed
        console.log('Forgot password clicked');
    }

    const i18n = {
        form: {
          title: 'Login',
          username: 'Email',
          password: 'Password',
          submit: 'Sign In',
          forgotPassword: 'Forgot Password?',
        },
        errorMessage: {
          title: 'Incorrect email or password',
          message: 'Please check that the email and password are correct and try again.',
          username: 'Email is required',
          password: 'Password is required',
        },
    };

  return (
    <div className='bg-dark h-100 d-flex justify-content-center align-items-center'>
        <div className="seller-login-rich-content">
            <LoginForm
            onLogin={login}
            onForgotPassword={forgot}
            title="Phone book"
            autofocus
            theme="dark"
            error={errorMessage}
            i18n={i18n}
            />
        </div>
    </div>
  )
}

export default Login