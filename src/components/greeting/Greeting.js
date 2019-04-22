import './greeting.scss';

export const Greeting = ({ name = '' }) => {
  const dayTime = new Date().getHours();
  const greetName = (name) ? `, ${name}` : '';

  if (dayTime >= 3 && dayTime <= 12) {
    return (<span className="greeting">{`Good morning${greetName}!`}</span>);
  }
  if (dayTime > 12 && dayTime < 18) {
    return (<span className="greeting">{`Good afternoon${greetName}!`}</span>);
  }
  if (dayTime >= 18 && dayTime <= 22) {
    return (<span className="greeting">{`Good evening${greetName}!`}</span>);
  }

  return (<span className="greeting">{`Good night${greetName}!`}</span>);
};
