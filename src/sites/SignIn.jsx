import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormLogin from "../components/FormLog";
import BulbImage from "../components/BulbImage";
import supabase from "../servives/supabase";
import bulbOn from "../assets/bulb0n.jpeg";
import bulbOff from "../assets/bulb0ff.jpg";

function SignIn() {
  const [authError, setAuthError] = useState(null);
  const [backgroundImage, setBackgroundImage] = useState(bulbOn);
  const [opacity, setOpacity] = useState(100);
  const navigation = useNavigate();
  let intervalId;

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

  useEffect(() => {
    if (authError !== null && opacity === 100) {
      intervalId = setInterval(() => {
        setOpacity((prevOpacity) => {
          if (prevOpacity < 0) {
            clearInterval(intervalId);
            setBackgroundImage(bulbOff);
          }
          return prevOpacity - 0.2;
        });
      }, 5);
    }
  }, [authError]);

  const clearError = () => {
    clearInterval(intervalId);
    setAuthError(null);
    setBackgroundImage(bulbOn);
    setOpacity(100);
  };

  return (
    <section className="signInUp">
      <BulbImage opacity={opacity} backgroundImage={backgroundImage} />
      <div className="basicShadow"></div>
      <FormLogin
        onClearError={clearError}
        onSubmitFunction={handleSignIn}
        headerSite={"Sign In"}
        extraInfoPart1={"Would you like to create an account?"}
        extraInfoPart2={"Just click on the link below"}
        siteToJump={"/signup"}
        btnDescription={"Login"}
        linkName={"Sign Up"}
        authError={authError}
      />
    </section>
  );
}

export default SignIn;
