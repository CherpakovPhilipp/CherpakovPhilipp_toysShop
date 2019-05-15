import './notFound.scss';
import notFoundImg from './assets/images/not-found.jpg';

export const NotFound = ({ location }) => {
  return (
    <>
      <h1>Sorry, page "{location.pathname}" not found</h1>
      <img src={notFoundImg} alt="Page not found" className="not-found"/>
    </>
  );
}