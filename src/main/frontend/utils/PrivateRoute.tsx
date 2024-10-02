import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import axios from 'axios';
import { RootState } from 'Frontend/storage';
import { CREATE_TOKEN, VALIDATE_TOKEN_URL } from 'Frontend/utils/urls';

const PrivateRoute = ({ element }: { element: JSX.Element }) => {
  const token = useSelector((state: RootState) => state.auth.token);
  const [isValidToken, setIsValidToken] = useState<boolean | null>(null);

  useEffect(() => {
    const validateToken = async () => {
      if (token) {
        try {
            await axios({
                url: VALIDATE_TOKEN_URL,
                method: "POST",
                headers:{
                    Authorization:CREATE_TOKEN(token)
                },
                data: token,
            })
            
            setIsValidToken(true);
        } catch (error) {
            console.error('Token validation failed', error);
            setIsValidToken(false);
        }
      } else {
        setIsValidToken(false);
      }
    };

    validateToken();
  }, [token]);

  if (isValidToken === null) {
    return <div>Loading...</div>; 
  }

  return isValidToken ? element : <Navigate to="/seller/login" />;
};

export default PrivateRoute;