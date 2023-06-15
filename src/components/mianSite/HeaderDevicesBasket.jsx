const HeaderDevicesBasket = ({devicesFromDataBase}) => {

  return (
    <div className="headerContainer">
      <header>
      Devices Basket
      <p>
        <span style={{rotate: devicesFromDataBase.length % 2 === 0 ? "360deg" : "" , transition: "1s", margin:"12px"}} className="material-symbols-outlined">devices</span>
        {devicesFromDataBase.length}
        <span style={{rotate: devicesFromDataBase.length % 2 === 0 ? "360deg" : "" , transition: "1s", margin:"12px"}} className="material-symbols-outlined">devices</span>
        </p>
        <ul>
          <li>StBy Name</li>
          <li>Watt</li>
          <li>Time</li>
          <li>Switch</li>
          <li>
            <span className={"switchOn material-symbols-outlined on-off-icon"}>
              delete
            </span>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default HeaderDevicesBasket;
