import supabase from "../../servives/supabase";
import {useState , useEffect} from "react"
import { useStoreActions, useStoreState } from "easy-peasy";

const RoomBody = ({devicesFromDataBase , singleRoom , item}) => {

  
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


  return (
    <ul className="mainContent__Room__Body">
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
          <span style={{display:"none"}}>{el.room_name}</span>
          <span
          id={el.id}
          onClick={handleDeleteFromSeparateBasket}
          className="material-symbols-outlined delete-icon"
        >
          delete
        </span>
        </li>
      )).filter((el , index, arr) => {
        return el.props.children[5].props.children === "ROOM1"
      })}
    </ul>
  );
};


export default RoomBody;