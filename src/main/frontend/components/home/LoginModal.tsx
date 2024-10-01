import { LoginForm } from '@vaadin/react-components';
import axios from 'axios';
import { RootState } from 'Frontend/storage';
import { setToken } from 'Frontend/storage/authSlice';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from 'Frontend/config';
import { MyVerticallyCenteredModalProps } from 'Frontend/inteface/home/UiProps';
import { LOGIN_URL } from 'Frontend/utils/urls';



const LoginModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {
    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<boolean | undefined>(undefined);

    // Updated to accept email instead of username
    const handleSetToken = (email: string, password: string) => {
        setErrorMessage(undefined);
        axios({
            url: LOGIN_URL,
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
                navigate('/profile');
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
        <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className='radius-20px'
        >
        <div className="login-rich-content">
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
        </Modal>
    );
};

export default LoginModal;
