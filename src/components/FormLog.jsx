import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const FormLog = ({
  onSubmitFunction,
  headerSite,
  extraInfoPart1,
  extraInfoPart2,
  siteToJump,
  btnDescription,
  linkName,
}) => {
  const [additionalInfo, setadditionalInfo] = useState("");

  useEffect(() => {
    let timeout = setTimeout(() => {
      setadditionalInfo(
        <>
          <p className="animeTypingSymulation additionalInfo">{extraInfoPart1}</p>
          <p className="animeTypingSymulation additionalInfo">{extraInfoPart2}</p>
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
          <form
            onSubmit={(event) => onSubmitFunction(event)}
            className="userFormContainer-form"
          >
            <div className="formLogin">
              <label className="formLabel" htmlFor="email">Login</label>
              <input id="email" type="email" placeholder="e-mail" />
            </div>
            <div className="formPassword">
              <label className="formLabel" htmlFor="password">Password</label>
              <input id="password" type="password" placeholder="password" />
            </div>
            {headerSite === "Sign Up" && (
              <div className="formPassword">
                <label className="formLabel" htmlFor="confirmPassword">Password</label>
                <input
                  id="confirmPassword"
                  type="password"
                  placeholder="password"
                />
              </div>
            )}
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
