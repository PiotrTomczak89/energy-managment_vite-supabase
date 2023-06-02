import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import store from "../../store/store.jsx";
import supabase from "../../servives/supabase";

console.log(store);

const AllDevicesBox = () => {
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  const deleteDevice = useStoreActions((actions) => actions.deleteDevice);

  const switchOnOff = useStoreActions((actions) => actions.turnOnOff);

  const switchStandBy = useStoreActions((actions) => actions.standByModyfier);

  const updatePower = useStoreActions((actions) => actions.changePower);

  const [test , setTest] = useState(null)

  

  const updateWorkingTime = useStoreActions(
    (actions) => actions.changeWorkingTime
  );

  const handleDelete = async (event) => {
    const { error } = await supabase
      .from("deviceTable")
      .delete()
      .eq("id", event.target.id);

    if (!error) {
      deleteDevice({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleSwitchOnOff = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({
        device_OnOff:
          event.target.className ===
          "switchOn material-symbols-outlined on-off-icon"
            ? false
            : true,
      })
      .eq("id", event.target.id);

    if (!error) {
      switchOnOff({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleSwitchStandBy = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({
        device_standBy:
        event.target.className ===
        "switchOn material-symbols-outlined on-off-icon"
          ? false
          : true,
      })
      .eq("id", event.target.id);

    if (!error) {
      switchStandBy({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleUpdatePower = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ device_power: event.target.value })
      .eq("id", event.target.id);

    if (!error) {
      updatePower({
        table: devicesFromDataBase,
        id: event.target.id,
        value: event.target.value,
      });
    }
  };

  const handleUpdateWorkingTime = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ device_working_time: event.target.value })
      .eq("id", event.target.id);

    if (!error) {
      updateWorkingTime({
        table: devicesFromDataBase,
        id: event.target.id,
        value: event.target.value,
      });
    }
  };

  const smallInputStyle = {
    height: "70%",
    width: "100%",
    textAlign: "left",
    border: "0px",
    background: "transparent",
    boxShadow: "0 0 0 0",
    paddingLeft: "2px",
    borderRadius: "0",
  };


  return (
    <div className="mainContent__Input__Box">
      <div className="mainContent__Input__Box--insideBox">
        <div className="headerContainer">
          <header>
            Devices Basket
            <ul>
              <li>StBy Name</li>
              <li>Watt</li>
              <li>Time</li>
              <li>Switch</li>
              <li>
                <span
                  className={"switchOn material-symbols-outlined on-off-icon"}
                >
                  delete
                </span>
              </li>
            </ul>
          </header>
        </div>
        <ul className="deviceContainer">
          {devicesFromDataBase.map((el) => (
            <li key={el.id} className="device">

              <p style={{display:"flex" , alignItems:"center"}}>
                <span
                id={el.id}
                data-test={el.id}
                onClick={handleSwitchStandBy}
                className={
                  el.device_standBy
                    ? "switchOn material-symbols-outlined on-off-icon"
                    : "switchOff material-symbols-outlined on-off-icon"
                }
              >mode_standby</span>
              {el.device_name}
              </p>
              
              {/* <p>{el.device_power}</p> */}

              <p className="inputNumberContainer">
                <input
                  className="inputNumberSmall"
                  id={el.id}
                  onChange={handleUpdatePower}
                  min="1"
                  defaultValue={el.device_power} //!!!!!!!!!!!!!!!
                  style={smallInputStyle}
                  type="number"
                />
              </p>
              {/* <p>{el.device_working_time}</p> */}
              <p>
                <input
                  className="inputNumberSmall"
                  id={el.id}
                  onChange={handleUpdateWorkingTime}
                  min="1"
                  placeholder={el.device_working_time}
                  defaultValue={el.device_working_time} //!!!!!!!!!!!!!!!
                  style={smallInputStyle}
                  type="time"
                />
              </p>
              {/* <p>{el.device_stand_OnOff}</p> */}
              <span
                id={el.id}
                data-test={el.id}
                onClick={handleSwitchOnOff}
                className={
                  el.device_OnOff
                    ? "switchOn material-symbols-outlined on-off-icon"
                    : "switchOff material-symbols-outlined on-off-icon"
                }
              >
                power_settings_new
              </span>
              <span
                id={el.id}
                onClick={handleDelete}
                className="material-symbols-outlined delete-icon"
              >
                delete
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllDevicesBox;
