import './greeting.scss';

import { Infobar } from '../../components/infoBar';
import { useState, useEffect } from 'react';

const time = new Date().getHours();
let dayTime;

if (time >= 3 && time <= 12) dayTime = 'morning';
else if (time > 12 && time < 18) dayTime = 'afternoon';
else if (time >= 18 && time <= 22) dayTime = 'evening';
else dayTime = 'night';

export const Greeting = ({ user }) => {
  const [info, setInfo] = useState(0);
  useEffect(() => { 
    fetch('http://localhost:8086/shop_info', {
      credentials: 'include'
    })
      .then(resp => resp.json())
      .then(info => {
        setInfo(info);
      })
  });


  const greetNonAuth = (
    <div className="greeting">
      <h1>Welcome to the Toy market</h1>
      <p>We are pleased to announce the launch of our brand new website!</p>
      <p>This is a platform with big range of toys and simple ordering system.</p>
      <p>Start right now!</p>
      <ul>
        <li>Register in the system</li>
        <li>Choose goods</li>
        <li>Add to the basket</li>
        <li>Pay online</li>
        <li>Get the parcel</li>
        <li>Enjoy it!</li>
      </ul>
    </div>
  );

  const greetAuth = (
    <>
      <h1>{`Good ${dayTime}, ${user}`}</h1>
      <Infobar categories={info.categories} products={info.products} published={info.publishedCategories} />
    </>
  );

  return user ? greetAuth : greetNonAuth;
};
