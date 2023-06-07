
const RoomBody = ({devicesFromDataBase , singleRoom}) => {

   //console.log(singleRoom)
  return (
    <ul className="mainContent__Room__Body">
      {/* {devicesFromDataBase.map((el) => (
        <li key={el.id} className="device">
          <span
            id={el.id}
            data-test={el.id}
            className={
              el.device_standBy
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            mode_standby
          </span>
          <p>{el.device_name}</p>
          <p>{el.device_power}</p>
          <span
            id={el.id}
            data-test={el.id}
            className={
              el.device_OnOff
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            power_settings_new
          </span>
          <p>{el.device_OnOff}</p>
        </li>
      ))} */}
            {devicesFromDataBase.map((el) => (
        <li key={el.id} className="device">
          <span
            id={el.id}
            data-test={el.id}
            className={
              el.device_standBy
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            mode_standby
          </span>
          <p>{el.device_name}</p>
          <p>{el.device_power}</p>
          <span
            id={el.id}
            data-test={el.id}
            className={
              el.device_OnOff
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            power_settings_new
          </span>
          <p>{el.device_OnOff}</p>
        </li>
      )).filter((el , index, arr) => {
        return el.props.children[1].props.children === "D2"
      })}
    </ul>
  );
};


export default RoomBody;