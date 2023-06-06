import { useEffect, useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";

const RoomsBox = () => {
  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });
  const [rooms, setRooms] = useState(null);
  const [errorName, setErrorName] = useState(null);

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

                  <ul className="mainContent__Room__Body">
            <li className="device">
              <p>Lodówka</p>
              <p>100W</p>
              <p>10h</p>
              <p>yes</p>
              <button>on/off</button>
            </li>
            <li className="device">
              <p>Mikrofala</p>
              <p>250W</p>
              <p>1h</p>
              <p>no</p>
              <button>on/off</button>
            </li>
            <li className="device">
              <p>TV</p>
              <p>40W</p>
              <p>3h</p>
              <p>yes</p>
              <button>on/off</button>
            </li>
            <li className="device">
              <p>Żarówka</p>
              <p>60W</p>
              <p>12h</p>
              <p>no</p>
              <button>on/off</button>
            </li>
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
