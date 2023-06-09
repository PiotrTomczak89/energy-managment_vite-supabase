import Statistic from "./Statistic";
import Data from "./Data";

import { useStoreActions, useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const Content = ({ data }) => {
  //save data as table of device
  const importDeviceFromDataBase = useStoreActions(
    (actions) => actions.importDeviceData
  );

  //save data as user email to storage
  const createSession = useStoreActions((actions) => actions.importSession(data.session.user.email));

  //read data as user email from storage
  const sessionLogin = useStoreState((state) => {
    return state.sessionLogin;
  });

  //download filtred data from supabase (filter equal to user login)
  const getDataFromDataBase = async () => {
    let { data, error } = await supabase
      .from("deviceTable")
      .select("*")
      .eq("author", sessionLogin);

    if (!error) {
      importDeviceFromDataBase(data);
    }
  };
  //run function that put data into store
  getDataFromDataBase();

  return (
    <section className="mainContent">
      {/* section left bar */}
      <Statistic />
      {/* section right bar  */}
      <DndProvider backend={HTML5Backend}>
        <Data />
      </DndProvider>
    </section>
  );
};

export default Content;
