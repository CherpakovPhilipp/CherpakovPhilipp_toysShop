import { Loader } from '../../components/loader';
import { server } from '../../services';
const { useState } = React;

export const Login = ({ onLogin }) => {
  const [submited, setSubmited] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    //setSubmited(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    
    server.post('public/login', data)
      .then(user => {
        onLogin(user);
        //setSubmited(true);
      })
  }

  return (
    submited ? <Loader /> :
    <form action="#" onSubmit={onSubmit}>
      <input 
        type="text" 
        name="email" 
        required 
        defaultValue="admin@a.com"
      /><br/><br/>
      <input 
        type="password" 
        name="password" 
        required 
        defaultValue="admin"
      /><br/><br/>

      <input type="submit" value="Login" />
    </form>
  );
}