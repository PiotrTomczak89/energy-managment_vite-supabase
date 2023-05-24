import FormInput from "./FormInput";
import AllDevicesBox from "./AllDevicesBox";
import RoomsBox from "./RoomsBox";

const Data = () => {
  return (
    <section className="mainContent__Data">
      {/* section to form and device from right site upper body content */}
      <div className="mainContent__Input">
        {/* inputs to add devices + button */}
        <FormInput />
        {/* right box to show decice div in general */}
        <AllDevicesBox />
      </div>
      {/* bottom section to show rooms + button do add room */}
      <RoomsBox />
    </section>
  );
};

export default Data;
