import bulbOn from "C:/JS_PROJECTS/energy-managment-vite-supabase/src/assets/bulb0n.jpeg";

const BulbImage = ({ opacity, backgroundImage }) => {
  return (
    <div className="signInUp-imageContainer">
      <img
        src={backgroundImage}
        alt="bulbOn"
        width="100%"
        height="100%"
        style={
          backgroundImage === bulbOn
            ? { opacity: `${opacity}%` }
            : { opacity: "100%" }
        }
      />
    </div>
  );
};

export default BulbImage;
