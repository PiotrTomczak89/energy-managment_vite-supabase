import Statistic from "./Statistic";
import Data from "./Data";

import { useStoreActions } from "easy-peasy";
import store from "../../store/store.jsx"

//useStoreState - read data
//useStoreAction - save data

const Content = ({data}) => {

//send data to store - user email
const createSession = useStoreActions((actions) => actions.importSession(data.session.user.email));

  return (
      <section className="mainContent">
        {/* section left bar */}
        <Statistic />
        {/* section right bar  */}
        <Data />
      </section>
  );
};

export default Content;
