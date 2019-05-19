import { Link } from 'react-router-dom';
import { history } from 'react';

export const Infobar = ({ categories, products, published }) => (
  <div className="info-bar">
    <p>You have <b>{categories}</b> categories, (<b>{published}</b> published)
    </p>
    <p>You have <b>{products}</b> products</p>
    <br />
    <button onClick={() => {history.push('/categories')}}>Go to categories</button>
  </div>
);
