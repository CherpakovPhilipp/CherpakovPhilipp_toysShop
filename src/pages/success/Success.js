import { Link } from 'react-router-dom';

export const Success = () => (
  <>
    <h1>Welcome to our toys-shop!</h1>
    <p>Your account was successfully created.</p>
    <p>Now you can use your email and password to login into profile.</p>
    <Link to="/">Go to main page</Link>
  </>
);
