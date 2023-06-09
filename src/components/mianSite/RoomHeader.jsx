import { useState, useEffect } from "react";
import { useStoreState } from "easy-peasy";

const RoomHeader = () => {

  const devicesFromDataBase = useStoreState((state) => state.deviceData);
  const daysInYear = 365;
  const daysInMounth = daysInYear / 12;


  const [power, setPower] = useState(0);
  const [activeDevice, setActiveDevice] = useState(0)

  //COUNT POWER
  useEffect(() => {
    let itemPower = 0;
    let itemWorkingTime = 0;
    let stanByPower = 0;

    const powerTable = devicesFromDataBase.map((el) => {
      console.log(el.room_name , "el from func")
        if (el.device_standBy && el.device_OnOff === false && el.room_name === "ROOM1") {
          stanByPower = 5 / 1000 * 24;
        } else {
          stanByPower = 0;
        }
          if (el.device_OnOff && el.room_name === "ROOM1") {
            itemPower = (el.device_power / 1000)
            //count miliseconds from data base 1h = 3600000ms date-ftn
            itemWorkingTime = Date.parse(`01 Jan 1970 ${el.device_working_time} UTC`) / 3600000
          } else {
            itemPower = 0;
            itemWorkingTime = 0;
          }
        return itemPower * itemWorkingTime + stanByPower
    })
    setPower(powerTable.reduce((acc, next) => {
      return acc + next
    }, 0))
  }, [devicesFromDataBase]);

  //CHECK ACTIVE DEVICE
  useEffect(() => {
    const activeDeviceTable = devicesFromDataBase.filter((el) => {
      return el.device_OnOff
    })
    setActiveDevice(activeDeviceTable.length)
  }, [devicesFromDataBase]);


  return (
    <div className="mainContent__Room__Header">
      <h3>Separate Basket</h3>
      <div>
      <p>{power.toFixed(2)} <sup>kWh/DAY</sup></p>
      <p>{(power * daysInMounth).toFixed(2)} <sup>kWh/DAY</sup></p>
      <p>{(power * daysInYear).toFixed(2)} <sup>kWh/DAY</sup></p>
      </div>
    </div>
  );
};

export default RoomHeader;
