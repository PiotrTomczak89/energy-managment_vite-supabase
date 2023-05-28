import { useState } from "react";
import { StoreProvider , useStoreState, useStoreActions } from "easy-peasy";
import store from "../../store/store.jsx"


const Statistic = () => {

  const devicesFromDataBase = useStoreState((state) => state.deviceData);

  const [power , setPower] = useState(null)
  const [workingTime , setWorkingTime] = useState(null)

  //count kWh (W / 1000)
  const testF = () => {
      const a = devicesFromDataBase.reduce((acc , next) => {
      return acc + next.device_power
    },0) / 1000
    const b = devicesFromDataBase.reduce((acc , next) => {
      //count miliseconds from data base 1h = 3600000ms 
      return acc + Date.parse(`01 Jan 1970 ${next.device_working_time} UTC`)
    },0) / 3600000
     // setPower(a);
     // setWorkingTime(b);
     console.log(a)
     console.log(b)
    return (a * b).toFixed(2)
  }

  testF(devicesFromDataBase)



  if (power) {
    setPower(testF)
    console.log(power)
  }  

  return (
    <>
      <section className="mainContent__Statistic">
      <div className="statisticBox">
          <h2>Consumed power</h2>
          <p>{devicesFromDataBase && devicesFromDataBase.length}</p>
        </div>
        <div className="statisticBox">
          <h2>Consumed power in real time</h2>
          <p>{devicesFromDataBase && testF(devicesFromDataBase)}</p>
        </div>
        <div className="statisticBox">
          <h2>Quantity of devices</h2>
          <p>{devicesFromDataBase && devicesFromDataBase.length}</p>
        </div>
      </section>
    </>
  );

};


export default Statistic;