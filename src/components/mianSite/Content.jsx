import Statistic from "./Statistic";
import Data from "./Data";

import { useEffect , useState } from "react";
import { useStoreActions , useStoreState } from "easy-peasy";
import supabase from "../../servives/supabase";
import store from "../../store/store.jsx";

//useStoreState - read data
//useStoreAction - save data

const Content = ({data}) => {

  const dataBaseA = useStoreActions((actions) => actions.addDeviceData);


//save data as user email to storage
const createSession = useStoreActions((actions) => actions.importSession(data.session.user.email));

//read data as user email from storage
const sessionLogin = useStoreState((state) => {
  return state.sessionLogin
})

//download filtred data from supabase (filter equal to user login) 
const getDataFromDataBase = async () => {
  let { data , error } = await supabase
.from('deviceTable')
.select("*").eq("author" , sessionLogin);;

if (!error) {
  dataBaseA(data);
}

}

//run function that put data into store
getDataFromDataBase()

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
