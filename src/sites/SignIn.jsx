import {useState} from 'react'
import { useNavigate , Link } from 'react-router-dom';
import supabase from "../servives/supabase";

function SignIn() {

    const [authError, setAuthError] = useState(null);
    const navigation = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;

    let { data, error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
      });

      if(!error) {
        navigation("/")
        setAuthError(null);
        return;
      }

      setAuthError(error.message);
  };

  return (
    <>
      <h1>SignIn</h1>
      {
        authError && <div>{authError}</div>
      }
      <form onSubmit={handleSignIn}>
        <input id="email" type="email" placeholder="e-mail" />
        <input id="password" type="password" placeholder="password" />
        <button>Login</button>
      </form>
      <Link to="/signup">SignUp</Link>
    </>
  );
}

export default SignIn;
