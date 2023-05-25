import { createStore, action } from "easy-peasy";

// const store = createStore({

// });

// export default store;


//an example of using
const store = createStore({
    luckyNumbers: [1,2,3],
    addNumbers: action((state,payload) => {
        state.luckyNumbers.push(payload);
    }),
});

export default store;