import SingleDevice from "./SingleDevice.jsx";

import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
import { useEffect, useState } from "react";
import store from "../../store/store.jsx";
import supabase from "../../servives/supabase";
import { useDrag } from "react-dnd";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";




console.log(store);

const AllDevicesBox = () => {
  let devicesFromDataBase = useStoreState((state) => state.deviceData);
  // let devicesFromDataBase = useStoreState((state) => state.deviceData);

  // const deleteDevice = useStoreActions((actions) => actions.deleteDevice);

  // const switchOnOff = useStoreActions((actions) => actions.turnOnOff);

  // const switchStandBy = useStoreActions((actions) => actions.standByModyfier);

  // const updatePower = useStoreActions((actions) => actions.changePower);

  // const [test , setTest] = useState(null)

  // const [{isDragging} , drag] = useDrag(() => ({
  //   type: "image",
  //   collect: (monitor) => ({
  //     isDragging: !!monitor.isDragging(),
  //   })

  // }))

  // const updateWorkingTime = useStoreActions(
  //   (actions) => actions.changeWorkingTime
  // );

  // const handleDelete = async (event) => {
  //   const { error } = await supabase
  //     .from("deviceTable")
  //     .delete()
  //     .eq("id", event.target.id);

  //   if (!error) {
  //     deleteDevice({ table: devicesFromDataBase, id: event.target.id });
  //   }
  // };

  // const handleSwitchOnOff = async (event) => {
  //   const { data, error } = await supabase
  //     .from("deviceTable")
  //     .update({
  //       device_OnOff:
  //         event.target.className ===
  //         "switchOn material-symbols-outlined on-off-icon"
  //           ? false
  //           : true,
  //     })
  //     .eq("id", event.target.id);

  //   if (!error) {
  //     switchOnOff({ table: devicesFromDataBase, id: event.target.id });
  //   }
  // };

  // const handleSwitchStandBy = async (event) => {
  //   const { data, error } = await supabase
  //     .from("deviceTable")
  //     .update({
  //       device_standBy:
  //       event.target.className ===
  //       "switchOn material-symbols-outlined on-off-icon"
  //         ? false
  //         : true,
  //     })
  //     .eq("id", event.target.id);

  //   if (!error) {
  //     switchStandBy({ table: devicesFromDataBase, id: event.target.id });
  //   }
  // };

  // const handleUpdatePower = async (event) => {
  //   const { data, error } = await supabase
  //     .from("deviceTable")
  //     .update({ device_power: event.target.value })
  //     .eq("id", event.target.id);

  //   if (!error) {
  //     updatePower({
  //       table: devicesFromDataBase,
  //       id: event.target.id,
  //       value: event.target.value,
  //     });
  //   }
  // };

  // const handleUpdateWorkingTime = async (event) => {
  //   const { data, error } = await supabase
  //     .from("deviceTable")
  //     .update({ device_working_time: event.target.value })
  //     .eq("id", event.target.id);

  //   if (!error) {
  //     updateWorkingTime({
  //       table: devicesFromDataBase,
  //       id: event.target.id,
  //       value: event.target.value,
  //     });
  //   }
  // };

  // const smallInputStyle = {
  //   height: "70%",
  //   width: "100%",
  //   textAlign: "left",
  //   border: "0px",
  //   background: "transparent",
  //   boxShadow: "0 0 0 0",
  //   paddingLeft: "2px",
  //   borderRadius: "0",
  // };


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
          {devicesFromDataBase && devicesFromDataBase.map((el) => (
            <SingleDevice key={el.id} el={el}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllDevicesBox;
