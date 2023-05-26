// const FormInput = () => {
//   return (
//     <form className="mainContent__Input__Form" action="">
//       <div className="formMain">
//         <input type="text" />
//         <label className="formLabel" htmlFor="">
//           Name
//         </label>
//       </div>
//       <div className="formMain">
//         <input type="text" />
//         <label className="formLabel" htmlFor="">
//           Watt
//         </label>
//       </div>
//       <div className="formMain">
//         <input type="text" />
//         <label className="formLabel" htmlFor="">
//           Working time
//         </label>
//       </div>
//       <div className="formMain">
//         <input type="text" />
//         <label className="formLabel" htmlFor="">
//           Stand By
//         </label>
//       </div>
//       <button className="btn btn-primary btn--main">Send</button>
//     </form>
//   );
// };

// export default FormInput;
import { useState } from "react";
import store from "../../store/store.jsx"
import supabase from "../../servives/supabase";

const handleSaveData = async (event) => {
  event.preventDefault();


  
  //const { deviceName , devicePower , deviceWorkingTime , deviceStandBy } = event.target.elements

  const { data, error } = await supabase
    .from("device-table")
    .insert([
      {
        device_name: "someValue",
        //device_working_time: 12,
        device_power: 10,
        device_standBy: true,
        device_OnOff: false,
      },
    ]);

  if (!error) {
    console.log(data);
  }

  //console.log(deviceName.value , devicePower.value , deviceWorkingTime.value , deviceStandBy.value)
};

const FormInput = () => {
  return (
    <form
      onSubmit={handleSaveData}
      className="mainContent__Input__Form"
      action=""
    >
      <div className="formMain">
        <input id="deviceName" type="text" />
        <label className="formLabel" htmlFor="">
          Name
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
        <input id="deviceStandBy" type="text" />
        <label className="formLabel" htmlFor="">
          Stand By
        </label>
      </div>
      <button className="btn btn-primary btn--main">Send</button>
    </form>
  );
};

export default FormInput;
