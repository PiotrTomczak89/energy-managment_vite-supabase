import { useStoreState } from "easy-peasy";
//import store from "./../../store/store.jsx"

const Header = () => {

  const sessionLogin = useStoreState((state) => {
        return state.sessionLogin
  })
//   const test = useStoreState((state) => {
//     return state.deviceData
// })
  const att = sessionLogin.lastIndexOf("@");
  //console.log(test)

  return (
    <>
      <header className="headerMain">
        <div className="logo">
          <img src="src/assets/bulbLogo.svg"></img>
        </div>
        <div className="userInformation">
            <div className="userName"><p>Welcome back</p>
            <strong>{sessionLogin.substring(0 , att)} !!!</strong></div>
            {/* //an idea about cost of kWh */}
            {/* <input placeholder="00000" type="number" style={{width: "10%" , height:"30px" , zIndex: "100"}}></input> */}
          <div className="userImage">
          <span className="material-symbols-outlined avatar">
account_circle
</span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;