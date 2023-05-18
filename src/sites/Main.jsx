import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import supabase from "../servives/supabase";

function Main() {
  const navigation = useNavigate();

  let alreadyMounted = false;

  useEffect(() => {
    if(!alreadyMounted) {
      getSession();
    }
    alreadyMounted = true;
  }, [])



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
      <h1>Main</h1>
      <button onClick={handleLogout}>LogOut</button>
      <div>Data from user</div>
      <form>
        <input type="text" />
        <button>Send</button>
      </form>
    </>
  );
}

export default Main;
