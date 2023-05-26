import { useStoreState } from "easy-peasy";
import store from "./../../store/store.jsx"

const Header = () => {

  const sessionLogin = useStoreState((state) => {
        return state.sessionLogin
  })
  console.log(sessionLogin)

  return (
    <>
      <header className="headerMain">
        <div className="logo">Logo</div>
        <div className="userInformation">
          <div className="userName">Welcome back {sessionLogin === "" ? sessionLogin : "User"} !!!</div>
          <div className="userImage">AV</div>
        </div>
      </header>
    </>
  );
};

export default Header;