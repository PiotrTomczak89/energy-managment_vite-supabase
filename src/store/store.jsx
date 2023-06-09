import { createStore, action } from "easy-peasy";

const store = createStore({
  sessionLogin: "",
  deviceData: [],
  importSession: action((state, payload) => {
    state.sessionLogin = payload;
  }),
  importDeviceData: action((state, payload) => {
    state.deviceData = payload.map((element) => {
      return element;
    });
  }),
  addLatestDeviceToDeviceTable: action((state, payload) => {
    state.deviceData.push(payload);
  }),
  deleteDevice: action((state, { table, id }) => {
    state.deviceData = table.filter((element) => {
      return element.id != id;
    });
  }),
  turnOnOff: action((state, { table, id }) => {
    state.deviceData = table.map((element) => {
      if (element.id == id) {
        return {
          ...element,
          device_OnOff: element.device_OnOff ? false : true,
        };
      }
      return element;
    });
  }),
  standByModyfier: action((state, { table, id }) => {
    state.deviceData = table.map((element) => {
      if (element.id == id) {
        return {
          ...element,
          device_standBy: element.device_standBy ? false : true,
        };
      }
      return element;
    });
  }),
  changePower: action((state, { table, id, value }) => {
    state.deviceData = table.map((element) => {
      if (element.id == id) {
        return { ...element, device_power: value };
      }
      return element;
    });
  }),
  changeWorkingTime: action((state, { table, id, value }) => {
    state.deviceData = table.map((element) => {
      if (element.id == id) {
        return { ...element, device_working_time: value };
      }
      return element;
    });
  }),
  changeDeviceLocation: action((state, { table, id, value }) => {
    console.log(table, id, value);
    state.deviceData = table.map((element) => {
      if (parseInt(element.id) === parseInt(id)) {
        return { ...element, room_name: value };
      }
      return element;
    });
  }),
});

export default store;
