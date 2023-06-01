import { useState, useEffect } from "react";
import { StoreProvider, useStoreState, useStoreActions } from "easy-peasy";
//import store from "../../store/store.jsx";

const Statistic = () => {
  const devicesFromDataBase = useStoreState((state) => state.deviceData);
  const daysInYear = 365;
  const daysInMounth = daysInYear / 12;
  let stanByPower = 0;

  const [power, setPower] = useState(0);
  const [workingTime, setWorkingTime] = useState(null);


    //wrong way of count power
  // useEffect(() => {
  //   setPower(devicesFromDataBase.reduce((acc, next) => {
  //       return acc + next.device_power;
  //     }, 0) / 1000);
  //   setWorkingTime(devicesFromDataBase.reduce((acc, next) => {
  //       //count miliseconds from data base 1h = 3600000ms date-ftn
  //       return acc + Date.parse(`01 Jan 1970 ${next.device_working_time} UTC`);
  //     }, 0) / 3600000);
  // }, [devicesFromDataBase]);


  //NEEDS SOLUTION FOR STANDBY
  useEffect(() => {
    let itemPower = 0;
    let itemWorkingTime = 0;
    const powerTable = devicesFromDataBase.map((el , next) => {
        if (el.device_standBy) {
          stanByPower = 5 / 1000 * 24;
        }
          if (el.device_OnOff) {
            itemPower = (el.device_power / 1000)
            //count miliseconds from data base 1h = 3600000ms date-ftn
            itemWorkingTime = Date.parse(`01 Jan 1970 ${el.device_working_time} UTC`) / 3600000
            console.log(itemWorkingTime)
          }
        return itemPower * itemWorkingTime
    })
    setPower(powerTable.reduce((acc, next) => {
      return acc + next
    }, 0))
  }, [devicesFromDataBase]);

  return (
    <>
      {
        devicesFromDataBase &&
        
        <section className="mainContent__Statistic">
        <div className="statisticBox">
          <h2>Consumed power / DAY</h2>
          <p>{(power).toFixed(2)}<sup>kWh</sup></p>
        </div>
        <div className="statisticBox">
          <h2>Consumed power / MOUNTH</h2>
          {/* <p>{devicesFromDataBase && testF(devicesFromDataBase)}</p> */}
          <p>{(power * daysInMounth).toFixed(2)}<sup>kWh</sup></p>
        </div>
        <div className="statisticBox">
          <h2>Consumed power / YEAR</h2>
          <p>{(power * daysInYear).toFixed(2)}<sup>kWh</sup></p>
        </div>
        <div className="statisticBox">
          <h2>Quantity of devices</h2>
          <p>{devicesFromDataBase.length}<sup>items</sup></p>
        </div>
      </section>
      }
    </>
  );
};

export default Statistic;
