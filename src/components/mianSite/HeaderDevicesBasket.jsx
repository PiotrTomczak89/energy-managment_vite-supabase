const HeaderDevicesBasket = ({devicesFromDataBase}) => {

  return (
    <div className="headerContainer">
      <header>
      Devices Basket
      <p><span className="material-symbols-outlined">devices</span> {devicesFromDataBase.length} <span className="material-symbols-outlined">devices</span></p>
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
