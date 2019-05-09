export const TabNav = ({ list, select, activeIndex }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };
 
  return (
    <nav className="nav-tab">
      <ul> {list.map((el, index) =>
          (<li 
            className={activeIndex === index ? 'active' : ''} 
            key={index}
          >
            <a href="/"
                 onClick={e => onClick(e, index)}>
              {el.title}
            </a>
          </li>)
        )}
      </ul>
    </nav> );
 };