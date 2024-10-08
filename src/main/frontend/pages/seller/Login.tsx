import { LoginForm } from '@vaadin/react-components'
import axios from 'axios';
import { CREATE_TOKEN, LOGIN_URL, VALIDATE_URL } from 'Frontend/utils/urls';
import { RootState } from 'Frontend/storage';
import { setToken, setUser } from 'Frontend/storage/authSlice';
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
                try{
                    axios({
                        url: VALIDATE_URL,
                        headers:{
                            Authorization: CREATE_TOKEN(tokenString)
                        }
                    })
                    .then(async(userResponse) => {
                        if((userResponse.data.data.roles.name == "SELLER")){
                            dispatch(setToken(tokenString));
                            dispatch(setUser(userResponse.data.data));
                            navigate('/seller/account');
                        }
                    })
                }catch(e:any){
        
                }
                setErrorMessage(true);
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
          title: 'Seller Login',
          username: 'Email',
          password: 'Password',
          submit: 'Sign In',
          forgotPassword: 'Forgot Password?',
        },
        errorMessage: {
          title: 'Incorrect email or password',
          message: 'Please check that the email and password are correct for seller login and try again.',
          username: 'Email is required',
          password: 'Password is required',
        },
    };

  return (
    <div className='seller-login-page'>
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