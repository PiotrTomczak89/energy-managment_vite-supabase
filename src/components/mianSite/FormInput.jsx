const FormInput = () => {
  return (
    <form className="mainContent__Input__Form" action="">
      <div className="formMain">
        <input type="text" />
        <label className="formLabel" htmlFor="">
          Name
        </label>
      </div>
      <div className="formMain">
        <input type="text" />
        <label className="formLabel" htmlFor="">
          Watt
        </label>
      </div>
      <div className="formMain">
        <input type="text" />
        <label className="formLabel" htmlFor="">
          Working time
        </label>
      </div>
      <div className="formMain">
        <input type="text" />
        <label className="formLabel" htmlFor="">
          Stand By
        </label>
      </div>
      <button className="btn btn-primary btn--main">Send</button>
    </form>
  );
};


export default FormInput;