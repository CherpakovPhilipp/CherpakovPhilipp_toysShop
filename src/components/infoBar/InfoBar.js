export const Infobar = props => (
  <div className="info-bar">
    <h2>Hello, <b>{props.user}</b></h2>
    <br />
    <p>You have <b>{props.categories}</b> categories, (<b>{props.published}</b> published)
    </p>
    <p>You have <b>{props.products}</b> products</p>
    <br />
    <a href="/categories">Go to categories</a>
  </div>
);
