//template login
//test-acc-piotr@test2
//template password
//test-acc-piotr@test2

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../servives/supabase";

function Main() {
  const navigation = useNavigate();

  let alreadyMounted = false;

  useEffect(() => {
    if (!alreadyMounted) {
      getSession();
    }
    alreadyMounted = true;
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (!data.session) {
      navigation("/signin");
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (!error) {
      navigation("/signin");
    }
  };

  return (
    <>
      <section className="mainContainer">
        {/* header section */}
        <header className="headerMain">
          <div className="logo">Logo</div>
          <div className="userInformation">
            <div className="userName">USER NAME</div>
            <div className="userImage">AV</div>
          </div>
        </header>
        {/* main section  */}
        <section className="mainContent">
          {/* section left bar */}
          <section className="mainContent__Statistic">
            <div className="statisticBox">1</div>
            <div className="statisticBox">2</div>
            <div className="statisticBox">3</div>
          </section>
          {/* section right bar  */}
          <section className="mainContent__Data">
            {/* section to form and device from right site upper body content */}
            <div className="mainContent__Input">
              {/* inputs to add devices + button */}
              <form className="mainContent__Input__Form" action="">
                <div className="formMain">
                  <input type="text" />
                  <label className="formLabel" htmlFor="">
                    Name
                  </label>
                </div>
                <div className="formMain">
                  <input type="text" />
                  <label className="formLabel" htmlFor="">
                    Watt
                  </label>
                </div>
                <div className="formMain">
                  <input type="text" />
                  <label className="formLabel" htmlFor="">
                    Working time
                  </label>
                </div>
                <div className="formMain">
                  <input type="text" />
                  <label className="formLabel" htmlFor="">
                    Stand By
                  </label>
                </div>
                <button className="btn btn-primary btn--main">Send</button>
              </form>
              {/* right box to show decice div in general */}
              <div className="mainContent__Input__Box">
                <div className="mainContent__Input__Box--insideBox">
                  <header>HeaderBox</header>
                  <ul className="deviceContainer">
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* bottom section to show rooms + button do add room */}
            <div className="mainContent__Rooms">
              <button className="btn btn-primary btn--main btn--room">Add room</button>
              {/* geeral container for all rooms */}
              <div className="mainContent__Rooms__Container">
                {/* room 1 */}
                <div className="mainContent__Room">
                  <div className="mainContent__Room__Header">Room1</div>
                  <ul className="mainContent__Room__Body">
                    <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Mikrofala</p><p>250W</p><p>1h</p><p>no</p><button>on/off</button></li>
                    <li className="device"><p>TV</p><p>40W</p><p>3h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Żarówka</p><p>60W</p><p>12h</p><p>no</p><button>on/off</button></li>
                  </ul>
                </div>
                {/* room 2 */}
                <div className="mainContent__Room">
                  <div className="mainContent__Room__Header">Room2</div>
                  <ul className="mainContent__Room__Body">
                    <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Mikrofala</p><p>250W</p><p>1h</p><p>no</p><button>on/off</button></li>
                    <li className="device"><p>TV</p><p>40W</p><p>3h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Żarówka</p><p>60W</p><p>12h</p><p>no</p><button>on/off</button></li>
                  </ul>
                </div>
                {/* room 3 */}
                <div className="mainContent__Room">
                  <div className="mainContent__Room__Header">Room1</div>
                  <ul className="mainContent__Room__Body">
                    <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Mikrofala</p><p>250W</p><p>1h</p><p>no</p><button>on/off</button></li>
                    <li className="device"><p>TV</p><p>40W</p><p>3h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Żarówka</p><p>60W</p><p>12h</p><p>no</p><button>on/off</button></li>
                  </ul>
                </div>
                {/* room 4 */}
                <div className="mainContent__Room">
                  <div className="mainContent__Room__Header">Room1</div>
                  <ul className="mainContent__Room__Body">
                    <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Mikrofala</p><p>250W</p><p>1h</p><p>no</p><button>on/off</button></li>
                    <li className="device"><p>TV</p><p>40W</p><p>3h</p><p>yes</p><button>on/off</button></li>
                    <li className="device"><p>Żarówka</p><p>60W</p><p>12h</p><p>no</p><button>on/off</button></li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </section>
        <footer>Fotter</footer>
        {/* <h1>Main</h1>
      <button onClick={handleLogout}>LogOut</button>
      <div>Data from user</div>
      <form>
        <input type="text" />
        <button>Send</button>
      </form> */}
      </section>
    </>
  );
}

export default Main;
