import supabase from "../../servives/supabase";
import { useStoreActions, useStoreState } from "easy-peasy";
import RoomBodyHeader from "./RoomBodyHeader";
import DropAreaPlaceHolder from "./DropAreaPlaceHolder";

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

  const devicesInSeparateBasket = devicesFromDataBase.filter(
    (item) => item.room_name === "ROOM1"
  );

  return (
    <ul className="mainContent__Room__Body">
      {devicesInSeparateBasket.length > 0 ? (
        <>
          <RoomBodyHeader />
          {devicesInSeparateBasket.map((singleDevice) => (
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
              <p>asd</p>
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
              <span
                id={singleDevice.id}
                onClick={handleDeleteFromSeparateBasket}
                className="material-symbols-outlined delete-icon"
              >
                delete
              </span>
            </li>
          ))}
        </>
      ) : (
        <DropAreaPlaceHolder />
      )}
    </ul>
  );
};

export default RoomBody;
