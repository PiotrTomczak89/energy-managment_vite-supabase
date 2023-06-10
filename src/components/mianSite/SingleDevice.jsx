import { useStoreState, useStoreActions } from "easy-peasy";
import supabase from "../../servives/supabase.js";
import { useDrag } from "react-dnd";

const SingleDevice = ({ singleDevice }) => {
  let devicesFromDataBase = useStoreState((state) => state.deviceData);

  const deleteDevice = useStoreActions((actions) => actions.deleteDevice);

  const switchOnOff = useStoreActions((actions) => actions.turnOnOff);

  const switchStandBy = useStoreActions((actions) => actions.standByModyfier);

  const updatePower = useStoreActions((actions) => actions.changePower);

  const updateWorkingTime = useStoreActions(
    (actions) => actions.changeWorkingTime
  );

  const handleDelete = async (event) => {
    const { error } = await supabase
      .from("deviceTable")
      .delete()
      .eq("id", event.target.id);

    if (!error) {
      deleteDevice({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleSwitchOnOff = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({
        device_OnOff:
          event.target.className ===
          "switchOn material-symbols-outlined on-off-icon"
            ? false
            : true,
      })
      .eq("id", event.target.id);

    if (!error) {
      switchOnOff({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleSwitchStandBy = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({
        device_standBy:
          event.target.className ===
          "switchOn material-symbols-outlined on-off-icon"
            ? false
            : true,
      })
      .eq("id", event.target.id);

    if (!error) {
      switchStandBy({ table: devicesFromDataBase, id: event.target.id });
    }
  };

  const handleUpdatePower = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ device_power: event.target.value })
      .eq("id", event.target.id);

    if (!error) {
      updatePower({
        table: devicesFromDataBase,
        id: event.target.id,
        value: event.target.value,
      });
    }
  };

  const handleUpdateWorkingTime = async (event) => {
    const { data, error } = await supabase
      .from("deviceTable")
      .update({ device_working_time: event.target.value })
      .eq("id", event.target.id);

    if (!error) {
      updateWorkingTime({
        table: devicesFromDataBase,
        id: event.target.id,
        value: event.target.value,
      });
    }
  };

  const smallInputStyle = {
    height: "70%",
    width: "100%",
    textAlign: "left",
    border: "0px",
    background: "transparent",
    boxShadow: "0 0 0 0",
    paddingLeft: "2px",
    borderRadius: "0",
  };

  //DnD
  const [{ isDragging }, drag] = useDrag(() => ({
    type: "singleDevice",
    item: { id: singleDevice.id, tab: devicesFromDataBase },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));
  return (
    <>
      <li
        key={singleDevice.id}
        ref={drag}
        style={{
          background: isDragging ? "#3D3E40" : "",
          border: isDragging ? "1px solid #3E2D45" : "",
        }}
        className="device"
      >
        <p style={{ display: "flex", alignItems: "center" }}>
          <span
            id={singleDevice.id}
            data-test={singleDevice.id}
            onClick={handleSwitchStandBy}
            className={
              singleDevice.device_standBy
                ? "switchOn material-symbols-outlined on-off-icon"
                : "switchOff material-symbols-outlined on-off-icon"
            }
          >
            mode_standby
          </span>
          {singleDevice.device_name}
        </p>

        <p className="inputNumberContainer">
          <input
            className="inputNumberSmall"
            id={singleDevice.id}
            onChange={handleUpdatePower}
            min={1}
            defaultValue={singleDevice.device_power}
            style={smallInputStyle}
            type="number"
          />
        </p>
        <p>
          <input
            className="inputNumberSmall"
            id={singleDevice.id}
            onChange={handleUpdateWorkingTime}
            min="1"
            placeholder={singleDevice.device_working_time}
            defaultValue={singleDevice.device_working_time}
            style={smallInputStyle}
            type="time"
          />
        </p>
        <span
          id={singleDevice.id}
          data-test={singleDevice.id}
          onClick={handleSwitchOnOff}
          className={
            singleDevice.device_OnOff
              ? "switchOn material-symbols-outlined on-off-icon"
              : "switchOff material-symbols-outlined on-off-icon"
          }
        >
          power_settings_new
        </span>
        <span
          id={singleDevice.id}
          onClick={handleDelete}
          className="material-symbols-outlined delete-icon"
        >
          delete
        </span>
      </li>
    </>
  );
};

export default SingleDevice;
