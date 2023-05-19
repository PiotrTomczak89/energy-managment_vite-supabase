import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../servives/supabase";

function SignIn() {
  const [authError, setAuthError] = useState(null);
  const [additionalInfo, setadditionalInfo] = useState("");
  const navigation = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;

    let { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    });

    if (!error) {
      navigation("/");
      setAuthError(null);
      return;
    }

    setAuthError(error.message);
  };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setadditionalInfo(
        <>
          <p className="additionalInfo">Would you like to create an account?</p>
          <p className="additionalInfo">Just click on the link below</p>
        </>
      );
    }, 5000);

    return () => {
      console.log("componentWillUnmount");
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="signInUp">
      <div className="signInUp-imageContainer"></div>
      <div className="signInUp-dataContainer">
        <div className="userFormContainer">
          <h1 className="userFormContainer-title">Sign In</h1>
          {authError && <div>{authError}</div>}
          <form className="userFormContainer-form" onSubmit={handleSignIn}>
            <div className="formLogin">
              <label htmlFor="">Login</label>
              <input id="email" type="email" placeholder="e-mail" />
            </div>
            <div className="formPassword">
              <label htmlFor="">Password</label>
              <input id="password" type="password" placeholder="password" />
            </div>
            <button className="btn btn-log">Login</button>
          </form>
          <div>
            {additionalInfo !== "<>" && (
              <div>
                {additionalInfo}
              </div>
            )}
            <Link className="navLink" to="/signup">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
