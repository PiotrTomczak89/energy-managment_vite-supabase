import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLog";
import supabase from "../servives/supabase";

import bulbOn from "../assets/bulbOn.jpg"

function SignIn() {
  const [authError, setAuthError] = useState(null);
  const navigation = useNavigate();

  const handleSignIn = async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;

    let { error } = await supabase.auth.signInWithPassword({
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

  //authError needs better solution below an error message that occured already.

  return (
    <section className="signInUp"> 
      <div className="signInUp-imageContainer">
        
        <img src={bulbOn} alt="bulbOn" width="100%" height="100%" />
      {authError && <div style={{color: "white"}}>{authError}</div>}
      </div>
      <div className="basicShadow"></div>
          <FormLogin
          onSubmitFunction={handleSignIn}
          headerSite={"Sign In"}
          extraInfoPart1={"Would you like to create an account?"}
          extraInfoPart2={"Just click on the link below"}
          siteToJump={"/signup"}
          btnDescription={"Login"}
          linkName={"Sign Up"}
          />
    </section>
  );
}

export default SignIn;
