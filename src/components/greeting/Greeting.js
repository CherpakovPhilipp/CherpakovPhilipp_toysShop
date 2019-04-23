import './greeting.scss';

export const Greeting = ({ name }) => {
  const time = new Date().getHours();
  let dayTime;
  const greetName = name ? `, ${name}` : '';

  if (time >= 3 && time <= 12) dayTime = 'morning';
  else if (time > 12 && time < 18) dayTime = 'afternoon';
  else if (time >= 18 && time <= 22) dayTime = 'evening';
  else dayTime = 'night';

  return <span className="greeting">{`Good ${dayTime + greetName}!`}</span>;
};
