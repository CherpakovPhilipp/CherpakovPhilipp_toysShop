export const Infobar = ({ categories, history, products, published }) => (
  <div className="info-bar">
    <p>You have <b>{categories}</b> categories, (<b>{published}</b> published)</p>
    <p>You have <b>{products}</b> products</p>
    <br />
    <button type="button" onClick={() => { history.push('/categories'); }}>Go to categories</button>
  </div>
);
