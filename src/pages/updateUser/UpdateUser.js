import { connect } from 'react-redux';

import { UserForm } from '../../components/userForm';
import { createUserAsync } from '../../store/user';

export const UpdateUserComponent = ({ dispatch, history, user }) => {
  const handleSubmit = info => {
    const callback = () => history.push('/success');
    dispatch(createUserAsync({info, callback}));
    
  }

  return (
    <>
      <UserForm 
        data={user}
        disabled={['email']}
        exclude={['password']}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

const mapStateToProps = state => ({ user: state.user.data, status: state.user.status});

export const UpdateUser = connect(mapStateToProps)(UpdateUserComponent);