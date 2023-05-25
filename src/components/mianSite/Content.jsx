import Statistic from "./Statistic";
import Data from "./Data";

import { StoreProvider , useStoreState, useStoreActions } from "easy-peasy";
import store from "../../store/store.jsx"

//useStoreState - read data
//useStoreAction - save data

const Content = () => {



  return (
    <StoreProvider store={store}>
      <section className="mainContent">
        {/* section left bar */}
        <Statistic />
        {/* section right bar  */}
        <Data />
      </section>
    </StoreProvider>
  );
};

export default Content;
