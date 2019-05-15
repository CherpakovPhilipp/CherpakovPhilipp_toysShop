import './main.scss';

export const Main = ({ children }) => {
  return (
    <div className="container">
      <main className="main">
        {children}
      </main>
    </div>
  );
}
