import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../servives/supabase";
import store from "../store/store.jsx";
import { StoreProvider } from "easy-peasy";

import Header from "../components/mianSite/Header";
import Content from "../components/mianSite/Content";
import Fotter from "../components/mianSite/Footer";
import Loading from "./Loading";

function Main() {
  const [session, setSession] = useState(null);

  const navigation = useNavigate();

  let alreadyMounted = false;

  useEffect(() => {
    if (!alreadyMounted) {
      getSession();
    }
    alreadyMounted = true;
  }, []);

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (!data.session) {
      navigation("/signin");
      return;
    }
    setSession(data);
  };

  return (
    <>
      {session !== null ? (
        <section className="mainContainer">
          <StoreProvider store={store}>
            <Header />
            <Content data={session} />
          </StoreProvider>
          <Fotter />
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

export default Main;
