// Private Route component
// Tests that user is logged in
// Else redirect to the Home Page for login
// Work still in progress


import { Navigate } from "react-router-dom";

const PrivateRoute = (props) => {

  // Set variables
  const isLoggedIn  = window.sessionStorage.getItem( 'isLoggedIn' ); 
  // const path        = props.children ? props.loggedIn : '/'; FIX set correct path


  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return (
    props.children
  );
};

export default PrivateRoute;