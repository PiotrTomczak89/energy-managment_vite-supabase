import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";

const FormInput = () => {

  const insertExtraDevice = useStoreActions(
    (actions) => actions.addLatestDeviceToDeviceTable
  );

  const [errorName, setErrorName] = useState(null);
  const [errorPower, setErrorPower] = useState(null);
  const [errorWorkingTime, setErrorWorkingTime] = useState(null);

  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });

  const handleSaveData = async (event) => {
    event.preventDefault();

    const { deviceName, devicePower, deviceWorkingTime, deviceStandBy } =
      event.target.elements;

    if (deviceName.value === "") {
      setErrorName("- is required");
      return;
    }
    if (devicePower.value === "") {
      setErrorPower("- is required");
      return;
    }
    if (devicePower.value < 0) {
      setErrorPower("- min value 0");
      return;
    }
    if (deviceWorkingTime.value === "") {
      setErrorWorkingTime("- min value 00:00");
      return;
    }
 

    const { data, error } = await supabase
      .from("deviceTable")
      .insert([
        {
          author: sessionLogin,
          device_name: deviceName.value,
          device_working_time: deviceWorkingTime.value,
          device_power: devicePower.value,
          device_standBy: deviceStandBy.value === "YES" ? true : false,
          device_OnOff: true,
        },
      ])
      .select("*");
    if (!error) {
      //function added one specific device to existing data in store
      insertExtraDevice(data[0]);
    }
  };

  const cleanError = () => {
    if (errorName) {
      setErrorName(null);
    }
    if (errorPower) {
      setErrorPower(null);
    }
    if (errorWorkingTime) {
      setErrorWorkingTime(null);
    }
  };

  return (
    <form
      onChange={cleanError}
      onSubmit={handleSaveData}
      className="mainContent__Input__Form"
      action=""
    >
      <div className="formMain">
        <input id="deviceName" type="text" />
        <label className="formLabel" htmlFor="">
          Name<p style={{ color: "red" }}>{errorName}</p>
        </label>
      </div>
      <div className="formMain">
        <input id="devicePower" type="number"/>
        <label className="formLabel" htmlFor="">
          Watt<p style={{ color: "red" }}>{errorPower}</p>
        </label>
      </div>
      <div className="formMain">
        <input id="deviceWorkingTime" type="time" />
        <label className="formLabel" htmlFor="">
          Working time<p style={{ color: "red" }}>{errorWorkingTime}</p>
        </label>
      </div>
      <div className="formMain">
        <select id="deviceStandBy" name="">
          <option value="YES">YES</option>
          <option value="NO">NO</option>
        </select>
        <label className="formLabel" htmlFor="">
          Stand By
        </label>
      </div>
      <button className="btn btn-primary btn--main">Send</button>
    </form>
  );
};

export default FormInput;
