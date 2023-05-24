const RoomsBox = () => {
  return (
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
  );
};


export default RoomsBox;