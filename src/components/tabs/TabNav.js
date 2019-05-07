export const TabNav = ({ list, select }) => {
  const onClick = (e, id) => {
    select(id);
    e.preventDefault();
  };
 
  return (
    <nav className="nav-tab">
      <ul> {list.map(el =>
          (<li key={el.id}>
            <a href="#"
                 onClick={e => onClick(e, el.id)}>
              {el.title}
            </a>
          </li>)
        )}
      </ul>
    </nav> );
 };