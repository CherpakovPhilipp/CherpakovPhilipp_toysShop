export const TabNav = ({ titles, select, activeIndex }) => {
  const onClick = (e, index) => {
    select(index);
    e.preventDefault();
  };
 
  return (
    <nav className="nav-tab">
      <ul> {titles.map((el, index) =>
          (<li 
            className={activeIndex === index ? 'active' : ''} 
            key={index}
          >
            <a href="/"
              onClick={e => onClick(e, index)}
            >
              {el}
            </a>
          </li>)
        )}
      </ul>
    </nav> );
 };