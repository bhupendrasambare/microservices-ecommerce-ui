import { LoginForm } from '@vaadin/react-components';
import axios from 'axios';
import { RootState } from 'Frontend/storage';
import { setToken } from 'Frontend/storage/authSlice';
import React, { useState } from 'react'
import {  Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import config from 'Frontend/config';

interface MyVerticallyCenteredModalProps {
    show: boolean;
    onHide: () => void;
  }

  const LoginModal: React.FC<MyVerticallyCenteredModalProps> = (props) => {


    const token = useSelector((state: RootState) => state.auth.token);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState<boolean | undefined>(undefined);

    const handleSetToken = (username: string, password: string) => {
        setErrorMessage(undefined);
        axios({
            url: config.baseUrl+ "/auth/login",
            method: "POST",
            data: {
                "username": username,
                "password": password
            },
        }).then((res) => {
            if (res.status === 200) {
                const resData: any = res.data.data;
                var tokenString:string = resData.token;
                dispatch(setToken(tokenString));
                navigate("/");
            } else {
                setErrorMessage(true);
            }
        }).catch((exc) => {
            setErrorMessage(true);
        });
    };

    function login(event: any) {
        const { username, password } = event.detail;
        handleSetToken(username, password);
    }

    function forgot(event: any) {
        // Implement forgot password functionality if needed
        console.log("Forgot password clicked");
    }

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
                title={"Phone book "}
                autofocus
                theme='dark'
                error={errorMessage}
                color='#000'
                />
            </div>
      </Modal>
    );
};

export default LoginModal