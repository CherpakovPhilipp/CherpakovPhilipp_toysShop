import './greeting.scss';

import { Infobar } from '../../components/infoBar';

export const Greeting = ({ user }) => {
  const time = new Date().getHours();
  let dayTime;

  if (time >= 3 && time <= 12) dayTime = 'morning';
  else if (time > 12 && time < 18) dayTime = 'afternoon';
  else if (time >= 18 && time <= 22) dayTime = 'evening';
  else dayTime = 'night';

  const greetNonAuth = (
    <>
      <h1>Welcome to the Toy market</h1>
      <p>We are pleased to announce the launch of our brand new website!</p>
      <p>From the 1st December our company starts to deliver online order.</p>
      <p>First hundred customers gets a 10% discount!</p>
    </>
  );

  const greetAuth = (
    <>
      <h1 className="greeting">{`Good ${dayTime}, ${user}`}</h1>
      <Infobar categories={5} products={35} published={23} />
    </>
  );

  return user ? greetAuth : greetNonAuth;
};
