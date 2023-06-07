import supabase from "../../servives/supabase";
import {useState , useEffect} from "react"
import { useStoreActions, useStoreState } from "easy-peasy";

const RoomBody = ({devicesFromDataBase}) => {

  
  const updateDeviceLocation = useStoreActions(
    (actions) => actions.changeDeviceLocation
  );

//const dropResult = dropResult.dropResult;



  
  const handleDeleteFromSeparateBasket = async (event) => {
    console.log(event.target.id)
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ room_name: "" })
      .eq("id", event.target.id);

    if (!error) {
      
      updateDeviceLocation({
        table: devicesFromDataBase,
        id: parseInt(event.target.id),
        value: "",
      });
    }
    console.log(parseInt(event.target.id))
  };

//   const { data, error } = await supabase
//   .from("deviceTable")
//   .update({ device_working_time: event.target.value })
//   .eq("id", event.target.id);

// if (!error) {
//   updateWorkingTime({
//     table: devicesFromDataBase,
//     id: event.target.id,
//     value: event.target.value,
//   });
// }


const devicesInSeparateBasket = devicesFromDataBase.filter((item) => item.room_name === "ROOM1")

console.log(devicesInSeparateBasket);


  return (
    <ul className="mainContent__Room__Body">
            {devicesInSeparateBasket.map((el) => (
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
          <span
          id={el.id}
          onClick={handleDeleteFromSeparateBasket}
          className="material-symbols-outlined delete-icon"
        >
          delete
        </span>
        </li>
      ))}
    </ul>
  );
};


export default RoomBody;