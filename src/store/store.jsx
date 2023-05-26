import { createStore, action } from "easy-peasy";

// const store = createStore({

// });

// export default store;


//an example of using
const store = createStore({
    test: "Piotr",
    session: "",
    luckyNumbers: [1,2,3],
    addNumbers: action((state,payload) => {
        state.luckyNumbers.push(payload);
    }),
    importSession: action((state, payload) => {
        state.session = payload;
    })
});

export default store;