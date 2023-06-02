//template login
//test-acc-piotr@test2
//template password
//test-acc-piotr@test2

import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../servives/supabase";
import store from "../store/store.jsx";
import { StoreProvider } from "easy-peasy";

import Header from "../components/mianSite/Header";
import Content from "../components/mianSite/Content";
import Footer from "../components/mianSite/Footer";
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

  // useEffect(() => {
  //   if (session) {
  //     getDataFromDataBase()
  //   }
  // }, [session])

  const getSession = async () => {
    const { data, error } = await supabase.auth.getSession();
    if (!data.session) {
      navigation("/signin");
      return;
    }
    setSession(data);
    console.log(data.session.user.email);
    
  };

  

//   const getDataFromDataBase = async () => {
//     let { data , error } = await supabase
//   .from('deviceTable')
//   .select("*")

//   if (!error) {
//     console.log(data)
//   }

// }

  const handleLogout = async () => {
    let { error } = await supabase.auth.signOut();
    if (!error) {
      navigation("/signin");
    }
  };

  if (!session) {
    console.log("test");
  }

  return (
    <>
      {session !== null ? (
        <section className="mainContainer">
          <StoreProvider store={store}>
            <Header />
            <Content data={session} />
          </StoreProvider>
          <Footer />
          {/* <h1>Main</h1>
  <button onClick={handleLogout}>LogOut</button>
  <div>Data from user</div>
  <form>
    <input type="text" />
    <button>Send</button>
  </form> */}
        </section>
      ) : (
        <Loading />
      )}
    </>
  );
}

{/* <section className="mainContainer">
<StoreProvider store={store}>
  <Header />
  {session && <Content data={session} />}
</StoreProvider>
<Footer />
<h1>Main</h1>
<button onClick={handleLogout}>LogOut</button>
<div>Data from user</div>
<form>
<input type="text" />
<button>Send</button>
</form>
</section> */}


export default Main;
