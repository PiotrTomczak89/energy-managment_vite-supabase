import supabase from "../servives/supabase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormLog from "../components/FormLog";
import BulbImage from "../components/BulbImage";
import bulbOn from "../assets/bulb0n.jpeg";

function SignUp() {
  const [authError, setAuthError] = useState(null);
  const navigation = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;

    if (password.value !== confirmPassword.value) {
      setAuthError("passwords do not match"); //DO POPRAWY DODAĆ DODATKOWY KOMPONENT RENDEROWANY WARUNKOWO
      return;
    }

    let { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });

    if (!error) {
      navigation("/");
      return;
    }
    setAuthError(error.message);
  };

  const clearError = () => {
    setAuthError(null);
  };

  return (
    <section className="signInUp">
      <BulbImage backgroundImage={bulbOn} />
      <div className="basicShadow"></div>
      <FormLog
        onClearError={clearError}
        onSubmitFunction={handleSignUp}
        headerSite={"Sign Up"}
        extraInfoPart1={"Do you already have an account?"}
        extraInfoPart2={"Just click on the link below"}
        siteToJump={"/signin"}
        btnDescription={"Register"}
        linkName={"Sign In"}
        authError={authError}
      />
    </section>
  );
}

export default SignUp;
