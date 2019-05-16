import './notFound.scss';

export const NotFound = ({ location }) => {
  return (
    <>
      <h1>Sorry, page "{location.pathname}" not found</h1>
      <img src="/images/not-found.jpg" alt="Page not found" className="not-found"/>
    </>
  );
}
