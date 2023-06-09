import HeaderDevicesBasket from "./HeaderDevicesBasket.jsx"
import SingleDevice from "./SingleDevice.jsx";

import { useStoreState } from "easy-peasy";



const AllDevicesBox = () => {
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  return (
    <div className="mainContent__Input__Box">
      <div className="mainContent__Input__Box--insideBox">
          <HeaderDevicesBasket />
          <ul className="deviceContainer">
          {devicesFromDataBase && devicesFromDataBase.map((singleDevice) => (
            <SingleDevice key={singleDevice.id} singleDevice={singleDevice}/>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllDevicesBox;
