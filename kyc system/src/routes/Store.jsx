import PropTypes from "prop-types"; // Import PropTypes
import React, { useMemo,useReducer, createContext } from "react"; // Import useMemo

import Reducer from "./Reducer";

const initialState = {
  user_data: {
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
  }
};

const Store = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  // Wrap the context value in useMemo to prevent it from changing on every render
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  );
};

// Define PropTypes for the Store component
Store.propTypes = {
  children: PropTypes.node.isRequired // Validate that children is a node and is required
};

export const Context = createContext(initialState);

export default Store;
