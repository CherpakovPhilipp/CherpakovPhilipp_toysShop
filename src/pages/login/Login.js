

export const Login = ({ onLogin }) => {
  const onSubmit = (event) => {
    event.preventDefault();
    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
    }
  
    setTimeout(() => {
      onLogin(data);
    }, 1000)
  }

  return (
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