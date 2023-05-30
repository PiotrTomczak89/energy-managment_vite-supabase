import { StoreProvider , useStoreState, useStoreActions } from "easy-peasy";
import { useEffect , useState } from "react";
import store from "../../store/store.jsx"
import supabase from "../../servives/supabase";


console.log(store)

const AllDevicesBox = () => {

  // const [devicesFromDataBase, setDevicesFromDataBase] = useState(store)

  // useEffect(() => {
  //   setDevicesFromDataBase(useStoreState((state) => state.deviceData));
  // }, [store]);

  const devicesFromDataBase = useStoreState((state) => state.deviceData);

  const deleteDevice = useStoreActions((actions) => actions.deleteDevice);


  const handleDelete = async (event) => {
    
    const { error } = await supabase
    .from('deviceTable')
    .delete()
    .eq('id' , event.target.id)

    if (!error) {
      //deleteDevice(event.target.id)
      deleteDevice({table: devicesFromDataBase , id: event.target.id})
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
                <button>on/off</button>
                <span id={el.id} onClick={handleDelete} className="material-symbols-outlined delete-icon">delete</span>
                </li>
              )
            }
          {/* <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li> */}
          </ul>
        </div>
      </div>
    )
}

export default AllDevicesBox;