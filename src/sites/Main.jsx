//template login
//test-acc-piotr@test2
//template password
//test-acc-piotr@test2

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../servives/supabase";

import Header from "../components/mianSite/Header";
import Content from "../components/mianSite/Content";
import Fotter from "../components/mianSite/Fotter";

function Main() {
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
    }
  };

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (!error) {
      navigation("/signin");
    }
  };

  return (
    <>
      <section className="mainContainer">
        <Header />
        <Content />
        <Fotter />
        {/* <h1>Main</h1>
      <button onClick={handleLogout}>LogOut</button>
      <div>Data from user</div>
      <form>
        <input type="text" />
        <button>Send</button>
      </form> */}
      </section>
    </>
  );
}

export default Main;
