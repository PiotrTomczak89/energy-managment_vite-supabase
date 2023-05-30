import { createStore, action } from "easy-peasy";

// const store = createStore({

// });

// export default store;


//an example of using
const store = createStore({
    test: "Piotr",
    sessionLogin: "",
    luckyNumbers: [1,2,3],
    deviceData: [],
    addNumbers: action((state,payload) => {
        state.luckyNumbers.push(payload);
    }),
    importSession: action((state, payload) => {
        state.sessionLogin = payload;
    }),
    importDeviceData: action((state, payload) => {
        state.deviceData = payload.map(element => {
            return element;
        });
    }),
    addLatestDeviceToDeviceTable: action((state, payload) => {
        state.deviceData.push(payload)
    }),
    deleteDevice: action((state, {table , id}) => {
        // console.log(table)
        // console.log(id)
        state.deviceData = table.filter((element) =>
        {
            return element.id != id;
        }
        )
    }),
});

export default store;