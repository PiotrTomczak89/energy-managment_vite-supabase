const HeaderDevicesBasket = () => {
  return (
    <div className="headerContainer">
      <header>
        Devices Basket
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
