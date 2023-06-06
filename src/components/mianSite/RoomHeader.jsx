import supabase from "../../servives/supabase";
import { useEffect, useState } from "react";

const RoomHeader = ({ singleRoom , handleDelete }) => {

    // const [rooms, setRooms] = useState(null);

    // const handleDelete = async (event) => {
    //     const { error } = await supabase
    //       .from("roomTable")
    //       .delete()
    //       .eq("id", event.target.id);
    
    //     if (!error) {
    //       setRooms(
    //         rooms && rooms.map((el) => {
    //           return el !== event.target.id;
    //         })
    //       );
    //     }
    //   };


  return (
    <div className="mainContent__Room__Header">
      <div>{singleRoom.room_name}</div>
      <span
        id={singleRoom.id}
        onClick={handleDelete}
        className={"switchOn material-symbols-outlined on-off-icon"}
      >
        delete
      </span>
    </div>
  );
};

export default RoomHeader;
