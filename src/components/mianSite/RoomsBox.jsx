import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import { useDrop } from "react-dnd";
import RoomHeader from "./RoomHeader";
import RoomBody from "./RoomBody";
import { useEffect , useState } from "react";

const RoomsBox = () => {

  const updateDeviceLocation = useStoreActions(
    (actions) => actions.changeDeviceLocation
  );

  const [{isOver, canDrop , dropResult , didDrop } , drop ] = useDrop(() => ({
  accept: "singleDevice",
  drop: (item , monitor) => handleUpdateLocation(item , monitor),
  collect: (monitor) => ({
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  didDrop: monitor.didDrop(),
  }),
}))


  const handleUpdateLocation = async (item) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ room_name: "ROOM1" })
      .eq("id", item.id);

    if (!error) {
      updateDeviceLocation({
        table: item.tab,
        id: parseInt(item.id),
        value: "ROOM1",
      });
    }
    console.log(item.tab)
    location.reload() //RELOAD SITE AFTER DROPING ASK ABOUT BETTER SOLUTION
  };


  return (
    <div className="mainContent__Rooms" >
      <div className="mainContent__Rooms__Container">
                <div className="mainContent__Room"
                ref={drop}
                style={{ opacity: isOver ? "50%" : "" , border: isOver ? "3px dashed #528498" : "" , transition:"0.5s", boxShadow: canDrop ? "2px 2px 22px #528498" : ""}}
                >
                  <RoomHeader/>
                  <RoomBody />
                </div>
      </div>
    </div>
  );
};

export default RoomsBox;