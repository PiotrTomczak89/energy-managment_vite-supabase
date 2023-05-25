import { StoreProvider , useStoreState, useStoreActions } from "easy-peasy";
import store from "../../store/store.jsx"

console.log(store)

const AllDevicesBox = () => {

  const luckyNumbers = useStoreState((state) => state.luckyNumbers);
  console.log(luckyNumbers);

    return (
        <div className="mainContent__Input__Box">
        <div className="mainContent__Input__Box--insideBox">
          <header>HeaderBox</header>
          <ul className="deviceContainer">
            {
              luckyNumbers.map(number => <li key={number} className="device"><p>{number}</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
              )
            }
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          <li className="device"><p>Lodówka</p><p>100W</p><p>10h</p><p>yes</p><button>on/off</button></li>
          </ul>
        </div>
      </div>
    )
}

export default AllDevicesBox;