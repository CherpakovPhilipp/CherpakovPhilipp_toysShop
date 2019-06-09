import { connect } from 'react-redux';

import { UserForm } from '../../components/userForm';
import { createUserAsync } from '../../store/user';

export const NewUserComponent = ({ dispatch, history }) => {
  const handleSubmit = info => {
    const callback = () => history.push('/success');
    dispatch(createUserAsync({info, callback}));
    
  }

  return (
    <>
      <UserForm 
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export const NewUser = connect()(NewUserComponent);