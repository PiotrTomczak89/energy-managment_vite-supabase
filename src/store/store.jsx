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
});

export default store;