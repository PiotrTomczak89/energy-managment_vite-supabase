import { useStoreState } from "easy-peasy";
import store from "./../../store/store.jsx"

const Header = () => {

  const test = useStoreState((state) => {
      return state.session

  })
  console.log(test)

  return (
    <>
      <header className="headerMain">
        <div className="logo">Logo</div>
        <div className="userInformation">
          <div className="userName">Welcome back {test} !!!</div>
          <div className="userImage">AV</div>
        </div>
      </header>
    </>
  );
};

export default Header;