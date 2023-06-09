import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import supabase from "../../servives/supabase"
//import store from "./../../store/store.jsx"
import bulbLogo from "../../assets/bulbLogo.svg"

const Header = () => {
  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });
  //   const test = useStoreState((state) => {
  //     return state.deviceData
  // })
  const att = sessionLogin.lastIndexOf("@");
  //console.log(test)
  const navigation = useNavigate();


  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (!error) {
      navigation("/signin");
    }
  };

  // if (!sessionLogin) {
  //   console.log("test");
  // }

  return (
    <>
      <header className="headerMain">
        <div className="logo">
          <img src={bulbLogo} className="st0 st1" alt="logo bulb"></img>
        </div>
        <div className="userInformation">
          <div className="userName">
            <p>Welcome back</p>
            <strong>{sessionLogin.substring(0, att)} !!!</strong>
          </div>
          {/* //an idea about cost of kWh */}
          {/* <input placeholder="00000" type="number" style={{width: "10%" , height:"30px" , zIndex: "100"}}></input> */}
          <div className="userImage">
            <span alt="avatar" className="material-symbols-outlined avatar">
              account_circle
            </span>
            <div className="logOut" onClick={handleLogout}>LogOut</div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
