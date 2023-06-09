import { useState } from "react";
import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";

const FormInput = () => {
  const insertExtraDevice = useStoreActions(
    (actions) => actions.addLatestDeviceToDeviceTable
  );

  const [errorName, setErrorName] = useState(null);

  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });

  const handleSaveData = async (event) => {
    event.preventDefault();

    const { deviceName, devicePower, deviceWorkingTime, deviceStandBy } =
      event.target.elements;

    if (deviceName.value === "") {
      alert("Name-is required");
      setErrorName("- is required");
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
        <input id="devicePower" type="number" />
        <label className="formLabel" htmlFor="">
          Watt
        </label>
      </div>
      <div className="formMain">
        <input id="deviceWorkingTime" type="time" />
        <label className="formLabel" htmlFor="">
          Working time
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
