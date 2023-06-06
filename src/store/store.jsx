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
        state.deviceData = table.filter((element) =>
        {
            return element.id != id;
        }
        )
    }),
    turnOnOff: action((state,{table , id}) => {
        state.deviceData = table.map(element => {
            if (element.id == id) {
                return {...element, device_OnOff: element.device_OnOff ? false : true}
            }
            console.log(element)
            return element;
        });
    }),
    standByModyfier: action((state,{table , id}) => {
        state.deviceData = table.map(element => {
            if (element.id == id) {
                return {...element, device_standBy: element.device_standBy ? false : true}
            }
            console.log(element.device_standBy)
            return element;
        });
    }),
    changePower: action((state,{table , id , value}) => {
        state.deviceData = table.map(element => {
            if (element.id == id) {
                return {...element, device_power: value}
            }
            return element;
        });
    }),
    changeWorkingTime: action((state,{table , id , value}) => {
        state.deviceData = table.map(element => {
            if (element.id == id) {
                console.log(value)
                return {...element, device_working_time: value}
            }
            return element;
        });
    }),
    changeDeviceLocation: action((state,{table , id , value}) => {
        // state.deviceData = table.map(element => {
        //     if (element.id == id) {
        //         console.log(value , "changeDeviceLocation")
        //         return {...element, room_name: value}
        //     }
        //     return element;
        // });
        state.deviceData.forEach((el) => {
            console.log(el.room_name)
        })
        // console.log(value , "changeDeviceLocation")
        // console.log("test" , value)
    }),
});

export default store;

// const updateItemNameById = (array, idToUpdate, newName) => {
//     const newArray = array.map((item) => {
//       if (item.id === idToUpdate) {
//         return { ...item, name: newName };
//       }
//       return item;
//     });
//     return newArray;
//   };