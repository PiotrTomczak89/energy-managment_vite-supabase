const DropAreaPlaceHolder = () => {
  return (
    <li className="dropAreaContainer">
      <h3>Drop device here</h3>
      <p>
        You can drag and drop single device from Devices Basket , to check them
        in Separate Basket
      </p>
      <ul>
        <li>More than one device can be added</li>
        <li>You can delete Sindle Device from this basket</li>
        <li>On/Off only allowed in General Basket</li>
      </ul>
    </li>
  );
};

export default DropAreaPlaceHolder;