// Private Route component
// Tests that user is logged in
// Else redirect to the Home Page for login
// Work still in progress


import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => { console.log( 'props', props );

  // Set variables
  const isLoggedIn  = props.loggedIn ? props.loggedIn : false;
  const path        = props.children ? props.loggedIn : '/';


  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return path;
};

export default PrivateRoute;