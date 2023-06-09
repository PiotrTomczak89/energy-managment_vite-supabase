import supabase from "../../servives/supabase";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect , useState } from "react";

const RoomBody = () => {
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  const updateDeviceLocation = useStoreActions(
    (actions) => actions.changeDeviceLocation
  );

  const handleDeleteFromSeparateBasket = async (event) => {
    console.log(event.target.id);
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
  };


 //START --->
  //Solution for updating data start
  // const importDeviceFromDataBase = useStoreActions(
  //   (actions) => actions.importDeviceData
  // );

  // //read data as user email from storage
  // const sessionLogin = useStoreState((state) => {
  //   return state.sessionLogin;
  // });

  // //download filtred data from supabase (filter equal to user login)
  // const getDataFromDataBase = async () => {
  //   let { data, error } = await supabase
  //     .from("deviceTable")
  //     .select("*")
  //     .eq("author", sessionLogin);

  //   if (!error) {
  //     importDeviceFromDataBase(data);
  //   }
  // };

  //Solution for updating data end <---END

  const devicesInSeparateBasket = devicesFromDataBase.filter(
    (item) => item.room_name === "ROOM1"
  );

  return (
    <ul className="mainContent__Room__Body">
      {devicesInSeparateBasket.length > 0 ?
      devicesInSeparateBasket.map((singleDevice) => (
        <li key={singleDevice.id} className="device">
          <span
            id={singleDevice.id}
            className={
              singleDevice.device_standBy
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            mode_standby
          </span>
          <p>{singleDevice.device_name}</p>
          <p>{singleDevice.device_power}</p>
          <span
            id={singleDevice.id}
            className={
              singleDevice.device_OnOff
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            power_settings_new
          </span>
          <p>{singleDevice.device_OnOff}</p>
          <span
            id={singleDevice.id}
            onClick={handleDeleteFromSeparateBasket}
            className="material-symbols-outlined delete-icon"
          >
            delete
          </span>
        </li>
      ))
      :
      <li className="dropAreaContainer">
      <h3>Drop device here</h3>
      <p>You can drag and drop single device from Devices Basket , to check them in Separate Basket</p>
      <ul>
        <li>More than one device can be added</li>
        <li>You can delete Sindle Device from this basket</li>
        <li>On/Off only allowed in General Basket</li>
      </ul>
      </li>}
      
    </ul>
  );
};

export default RoomBody;
