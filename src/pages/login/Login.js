import { Loader } from '../../components/loader';
const { useState } = React;

export const Login = ({ onLogin }) => {
  const [submited, setSubmited] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();
    setSubmited(true);

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
    
    setTimeout(() => {
      onLogin(data);
    }, 2000)
  }

  return (
    submited ? <Loader /> :
    <form action="#" onSubmit={onSubmit}>
      <input 
        type="text" 
        name="email" 
        required 
        defaultValue="admin@admin.com"
      /><br/><br/>
      <input 
        type="password" 
        name="password" 
        required 
        defaultValue="password"
      /><br/><br/>

      <input type="submit" value="Login" />
    </form>
  );
}