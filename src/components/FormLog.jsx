import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import supabase from "../servives/supabase";

const FormLog = ({
  headerSite,
  extraInfoPart1,
  extraInfoPart2,
  siteToJump,
  btnDescription,
  linkName,
}) => {
  const [authError, setAuthError] = useState(null);
  const [additionalInfo, setadditionalInfo] = useState("");
  const navigation = useNavigate();

//   const handleSignIn = async (event) => {
//     event.preventDefault();
//     const { email, password, confirmPassword } = event.target.elements;

//     let { data, error } = await supabase.auth.signInWithPassword({
//       email: email.value,
//       password: password.value,
//     });

//     if (!error) {
//       navigation("/");
//       setAuthError(null);
//       return;
//     }

//     setAuthError(error.message);
//   };

  useEffect(() => {
    let timeout = setTimeout(() => {
      setadditionalInfo(
        <>
          <p className="additionalInfo">{extraInfoPart1}</p>
          <p className="additionalInfo">{extraInfoPart2}</p>
        </>
      );
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <>
      <div className="signInUp-dataContainer">
        <div className="userFormContainer">
          <h1 className="userFormContainer-title">{headerSite}</h1>
          {authError && <div>{authError}</div>}
          <form className="userFormContainer-form">
            <div className="formLogin">
              <label htmlFor="">Login</label>
              <input id="email" type="email" placeholder="e-mail" />
            </div>
            <div className="formPassword">
              <label htmlFor="">Password</label>
              <input id="password" type="password" placeholder="password" />
            </div>
            {headerSite ==="Sign Up" &&
                <div className="formPassword">
              <label htmlFor="">Password</label>
              <input id="confirmPassword" type="password" placeholder="password" />
            </div>
            }
            <button className="btn btn-log">{btnDescription}</button>
          </form>
          <div>
            {additionalInfo !== "<>" && <div>{additionalInfo}</div>}
            <Link className="navLink" to={siteToJump}>
              {linkName}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormLog;
