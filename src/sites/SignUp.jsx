import supabase from "../servives/supabase";
import { useNavigate } from "react-router-dom";
import FormLog from "../components/FormLog";
function SignUp() {
  const navigation = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    const { email, password, confirmPassword } = event.target.elements;

    if (password.value !== confirmPassword.value) {
      alert("passwords do not match"); //DO POPRAWY DODAĆ DODATKOWY KOMPONENT RENDEROWANY WARUNKOWO
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
  };

  return (
    <section className="signInUp">
      <div className="signInUp-imageContainer"></div>
      <FormLog
        onSubmitFunction={handleSignUp}
        headerSite={"Sign Up"}
        extraInfoPart1={"Do you already have an account?"}
        extraInfoPart2={"Just click on the link below"}
        siteToJump={"/signin"}
        btnDescription={"Register"}
        linkName={"Sign In"}
      />
    </section>
  );
}

export default SignUp;
