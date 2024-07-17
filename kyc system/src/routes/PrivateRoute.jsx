import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom';

export default function PrivateRoute({ children }) {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({
        accessToken: "",
        userId: "",
        userType: "",
        userEmail: "",
        profilePicture: "",
        subscriptionExpiry: "",
        tokenExpiry: "",
        isSignup: false,
        firstName: "",
        lastName: ""
    });

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user_data"));
        if (storedUser) {
            setUser(storedUser);
        }
        setIsLoading(false);
    }, [user.accessToken]); // Include user.accessToken in the dependency array

    const isLogin = !!user.accessToken;

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (isLogin) {
        return children;
    }
    
    return <Navigate to="login" replace />;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired // Validate that children is a node and is required
};
