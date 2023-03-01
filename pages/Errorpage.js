import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import "/Common.css";



const ErrorPage = () => {
  return (
    <div className="section-contact">
      <h1>404 Error: Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
      {/* <Link to="/">Return to Home Page</Link> */}
      <NavLink to="/" className="error-link">Go to home</NavLink>
    </div>
  );
}

export default ErrorPage;