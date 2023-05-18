import supabase from "../servives/supabase";
import { useNavigate , Link } from "react-router-dom";    

function SignUp() {

const navigation = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;

    if (password.value !== confirmPassword.value) {
      alert("passwords do not match"); //DO POPRAWY DODAĆ DODATKOWY KOMPONENT RENDEROWANY WARUNKOWO
      return;
    }

    let { data,error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    });

    if (!error) {
    navigation("/");
    return;
    }
  };

  return (
    <>
      <h1>SignUp</h1>
      <form onSubmit={handleSignUp}>
        <input id="email" type="email" placeholder="e-mail" />
        <input id="password" type="password" placeholder="password" />
        <input
          id="confirmPassword"
          type="password"
          placeholder="confirm password"
        />
        <button>SignUp</button>
      </form>
      <Link to="/signin">SigIn</Link>
    </>
  );
}

export default SignUp;
