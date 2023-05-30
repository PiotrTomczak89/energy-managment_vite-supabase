import { StoreProvider , useStoreState, useStoreActions } from "easy-peasy";
import { useEffect , useState } from "react";
import store from "../../store/store.jsx"
import supabase from "../../servives/supabase";


console.log(store)

const AllDevicesBox = () => {

  const devicesFromDataBase = useStoreState((state) => state.deviceData);

  const deleteDevice = useStoreActions((actions) => actions.deleteDevice);

  const switchOnOff = useStoreActions((actions) => actions.turnOnOff);

  const handleDelete = async (event) => {
    
    const { error } = await supabase
    .from('deviceTable')
    .delete()
    .eq('id' , event.target.id)

    if (!error) {
      deleteDevice({table: devicesFromDataBase , id: event.target.id})
    }
  }

  const handleSwitch = async (event) => {
    const { data , error } = await supabase
    .from('deviceTable')
    .update({device_OnOff: event.target.className === "switchOn material-symbols-outlined on-off-icon" ? false : true})
    .eq('id' , event.target.id)

    if (!error) {
      console.log(data)
      console.log(event.target.className)
      switchOnOff(devicesFromDataBase)
    }
  }

    return (
        <div className="mainContent__Input__Box">
        <div className="mainContent__Input__Box--insideBox">
          <div className="headerContainer">
          <header>
            Devices Basket
          <ul>
            <li>Name</li>
            <li>Watt</li>
            <li>Time</li>
            <li>Switch</li>
            <li>Delete</li>
          </ul>
          </header>

          </div>
          <ul className="deviceContainer">
            {
              devicesFromDataBase.map(el => <li key={el.id} className="device">
                <p>{el.device_name}</p>
                <p>{el.device_power}</p>
                <p>{el.device_working_time}</p>
                <p>{el.device_standBy}</p>
                <span
                id={el.id}
                onClick={handleSwitch}
                className={el.device_OnOff ? "switchOn material-symbols-outlined on-off-icon" : "switchOff material-symbols-outlined on-off-icon"}>
                {el.device_OnOff ? "power_settings_new" : "power_settings_new"}
                </span>
                <span
                id={el.id}
                onClick={handleDelete}
                className="material-symbols-outlined delete-icon">
                  delete
                </span>
                </li>
              )
            }
          </ul>
        </div>
      </div>
    )
}

export default AllDevicesBox;