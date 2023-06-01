import { useStoreState } from "easy-peasy";
//import store from "./../../store/store.jsx"

const Header = () => {

  const sessionLogin = useStoreState((state) => {
        return state.sessionLogin
  })
//   const test = useStoreState((state) => {
//     return state.deviceData
// })
  console.log(sessionLogin)
  //console.log(test)

  return (
    <>
      <header className="headerMain">
        <div className="logo">Logo</div>
        <div className="userInformation">
            <div className="userName">Welcome back {sessionLogin} !!!</div>
            {/* //an idea about cost of kWh */}
            {/* <input placeholder="00000" type="number" style={{width: "10%" , height:"30px" , zIndex: "100"}}></input> */}
          <div className="userImage">AV</div>
        </div>
      </header>
    </>
  );
};

export default Header;