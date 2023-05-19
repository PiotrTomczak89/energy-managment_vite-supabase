import FormLogin from "../components/FormLog";

function SignIn() {

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
 

  return (
    <section className="signInUp">
      <div className="signInUp-imageContainer"></div>
          <FormLogin onSubmit={handleSignIn}
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
