import { connect } from 'react-redux';

import { Infobar } from '../../components/infoBar';

import './greeting.scss';

const time = new Date().getHours();
let dayTime;

if (time >= 3 && time <= 12) dayTime = 'morning';
else if (time > 12 && time < 18) dayTime = 'afternoon';
else if (time >= 18 && time <= 22) dayTime = 'evening';
else dayTime = 'night';

export const HomeAuthComponent = ({ user, info }) => (
  <>
    <h1>{`Good ${dayTime}, ${user.firstName}`}</h1>
    {info && <Infobar categories={info.categories} products={info.products} published={info.publishedCategories} />}
  </>
);

const mapStateToProps = state => ({
  user: state.user,
  info: state.info,
});

export const HomeAuth = connect(mapStateToProps)(HomeAuthComponent);
