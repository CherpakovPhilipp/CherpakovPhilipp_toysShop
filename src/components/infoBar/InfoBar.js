import { Link } from 'react-router-dom';

export const Infobar = ({ categories, products, published }) => (
  <div className="info-bar">
    <p>You have <b>{categories}</b> categories, (<b>{published}</b> published)
    </p>
    <p>You have <b>{products}</b> products</p>
    <br />
    <Link to="/categories">Go to categories</Link>
  </div>
);
