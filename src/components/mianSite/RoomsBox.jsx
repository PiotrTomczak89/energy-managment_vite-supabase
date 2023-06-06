import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import { useDrop } from "react-dnd";

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


const [{isOver} , drop] = useDrop(() => ({
  accept: "singleDevice",
  drop: (item) => handleUpdateLocation(item),
  collect: (monitor) => ({
    isOver: !!monitor.isOver(),
  }),
}))

  let alreadyMounted = false;

  useEffect(() => {
    if (!alreadyMounted) {
      getDataFromDataBase();
    }
    alreadyMounted = true;
  }, [rooms]);

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

    //console.log(deviceName.value , devicePower.value , deviceWorkingTime.value , deviceStandBy.value)
  };

  const handleDelete = async (event) => {
    const { error } = await supabase
      .from("roomTable")
      .delete()
      .eq("id", event.target.id);

    if (!error) {
      setRooms(
        rooms.map((el) => {
          return el !== event.target.id;
        })
      );
    }
  };

  const handleUpdateLocation = async (item) => {
    console.log(item)
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
    //console.log(id)
  };




  return (
    <div className="mainContent__Rooms">
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
        {rooms
          ? rooms.map((el) => {
              return (
                <div key={el.id} className="mainContent__Room">
                  <div className="mainContent__Room__Header">
                    <div>{el.room_name}</div>
                    <span
                      id={el.id}
                      onClick={handleDelete}
                      className={
                        "switchOn material-symbols-outlined on-off-icon"
                      }
                    >
                      delete
                    </span>
                  </div>
                  <ul className="mainContent__Room__Body" ref={drop}>
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
                      </li>
                    ))}{" "}
                  </ul>
                </div>
              );
            })
          : "err"}
      </div>
    </div>
  );
};

export default RoomsBox;
