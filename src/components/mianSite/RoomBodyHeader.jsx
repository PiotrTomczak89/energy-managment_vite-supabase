const RoomBodyHeader = () => {
  return (
    <ul className="mainContent__Room__BodyHeader">
      <li>StBy</li>
      <li>Name</li>
      <li>Watt</li>
      <li>Time</li>
      <li>Switch</li>
      <li>
        <span className={"switchOn material-symbols-outlined on-off-icon"}>
          delete
        </span>
      </li>
    </ul>
  );
};

export default RoomBodyHeader;
