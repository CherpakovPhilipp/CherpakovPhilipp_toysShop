import { connect } from 'react-redux';
import { useState, useEffect } from 'react';

import { Infobar } from '../../components/infoBar';
import { server } from '../../services';

import './greeting.scss';

const time = new Date().getHours();
let dayTime;

if (time >= 3 && time <= 12) dayTime = 'morning';
else if (time > 12 && time < 18) dayTime = 'afternoon';
else if (time >= 18 && time <= 22) dayTime = 'evening';
else dayTime = 'night';

export const GreetingComponent = ({ user, info }) => {
  return user
    ? (
      <>
        <h1>{`Good ${dayTime}, ${user.firstName}`}</h1>
        {info && <Infobar categories={info.categories} products={info.products} published={info.publishedCategories} />}
      </>
    )
    : (
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
};

const mapStateToProps = state => ({
  user: state.user,
  info: state.info,
});

export const Greeting = connect(mapStateToProps)(GreetingComponent);
