import Statistic from "./Statistic";
import Data from "./Data";

const Content = () => {
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
