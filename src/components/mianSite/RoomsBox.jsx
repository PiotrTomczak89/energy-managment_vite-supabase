import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import { useDrop } from "react-dnd";
import RoomHeader from "./RoomHeader";
import RoomBody from "./RoomBody";

const RoomsBox = () => {
  
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  // const sessionLogin = useStoreState((state) => {
  //   return state.sessionLogin;
  // });

  const updateDeviceLocation = useStoreActions(
    (actions) => actions.changeDeviceLocation
  );

  const [{isOver, canDrop , dropResult } , drop ] = useDrop(() => ({
  accept: "singleDevice",
  drop: (item , monitor) => handleUpdateLocation(item , monitor),
  collect: (monitor) => ({
  isOver: monitor.isOver(),
  }),
  
}))


  const handleUpdateLocation = async (item) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ room_name: "ROOM1" })
      .eq("id", item.id);

    if (!error) {
      updateDeviceLocation({
        table: devicesFromDataBase,
        id: parseInt(item.id),
        value: "ROOM1",
      });
    }
    console.log(parseInt(item.id))
  };


  return (
    <div className="mainContent__Rooms" >
      <div className="mainContent__Rooms__Container">
                <div className="mainContent__Room" ref={drop}>
                  <RoomHeader/>
                  <RoomBody  devicesFromDataBase={devicesFromDataBase}/>
                </div>
      </div>
    </div>
  );
};

export default RoomsBox;