import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import { useDrop } from "react-dnd";
import RoomHeader from "./RoomHeader";
import RoomBody from "./RoomBody";

const RoomsBox = () => {
  
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });

  const updateDeviceLocation = useStoreActions(
    (actions) => actions.changeDeviceLocation
  );

  const [rooms, setRooms] = useState(null);
  const [errorName, setErrorName] = useState(null);
  const [deleteRefresh, setDeleteRefresh] = useState(null);





//const dropResult = dropResult.dropResult;


  let alreadyMounted = false;

  useEffect(() => {
    if (!alreadyMounted) {
      getDataFromDataBase();
    }
    alreadyMounted = true;
    setDeleteRefresh(null)
  }, [deleteRefresh]);

  //download filtred data from supabase (filter equal to user login)
  const getDataFromDataBase = async () => {
    let { data, error } = await supabase
      .from("roomTable")
      .select("*")
      .eq("author", sessionLogin);

    if (!error) {
      setRooms(data);
    }
  };

  const cleanError = () => {
    if (errorName) {
      setErrorName(null);
    }
  };

  const handleAddRoom = async (event) => {
    event.preventDefault();

    const { roomName } = event.target.elements;

    if (roomName.value === "") {
      setErrorName("Name is required");
      return;
    }

    const { data, error } = await supabase
      .from("roomTable")
      .insert([
        {
          author: sessionLogin,
          room_name: roomName.value,
        },
      ])
      .select("*");
    if (!error) {
      //function added one specific device to existing data in store
      setRooms((prev) => [...prev, data[0]]);
    }

  };

  const handleDelete = async (event) => {
    console.log(event.target.id)
    const { error } = await supabase
      .from("roomTable")
      .delete()
      .eq("id", event.target.id);

    if (!error) {
      setDeleteRefresh(true)
      setRooms(rooms);
    }
  };

  const [{isOver, canDrop , dropResult} , drop ] = useDrop(() => ({
  accept: "singleDevice",
  drop: (item , monitor) => handleUpdateLocation(item , monitor),
  collect: (monitor) => ({
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop(),
  dropResult: monitor.getDropResult()
  }),
  
}))

  const handleUpdateLocation = async (item , monitor) => {
    console.log(item , "id of draged item");
    const dropResult = monitor.getDropResult();
    const dropIsOver = monitor.isOver();
    const canDrop = monitor.canDrop();
    console.log('Drop result:', dropResult); //RESULT = null after droping
    console.log('dropIsOver:', dropIsOver); 
    console.log('canDrop:', canDrop); 
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ room_name: "ABCtest" })
      .eq("id", item.id);

    if (!error) {
      updateDeviceLocation({
        table: devicesFromDataBase,
        id: item.id,
        value: "ABCtest",
      });
    }
  };


  console.log(rooms)

  return (
    <div className="mainContent__Rooms" ref={drop}>
      <form onSubmit={handleAddRoom} onChange={cleanError}>
        <div className="formRoom">
          <input placeholder={"Room name"} id="roomName" type="text" />
          <label htmlFor="">{errorName ? errorName : ""}</label>
        </div>
        <button className="btn btn-primary btn--main btn--room">
          Add room
        </button>
      </form>
      <div className="mainContent__Rooms__Container">
        {rooms && rooms.map((singleRoom) => {
              return (
                <div key={singleRoom.id} className="mainContent__Room" >
                  <RoomHeader singleRoom={singleRoom} handleDelete={handleDelete}/>
                  <RoomBody devicesFromDataBase={devicesFromDataBase} singleRoom={singleRoom}/>
                </div>
              );
            })
          }
      </div>
    </div>
  );
};

export default RoomsBox;
