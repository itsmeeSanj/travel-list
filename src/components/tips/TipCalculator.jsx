import React from "react";
import Bill from "./Bill";
import Service from "./Service";

export function TipCalculator() {
  const [billNum, SetBillNum] = React.useState("");
  const [serviceVal, SetServiceVal] = React.useState(0);
  const [friendServiceVal, SetFriendServiceVal] = React.useState(0);

  const handleBillValue = (e) => {
    SetBillNum(Number(e.target.value));
  };

  const handleServiceChange = (e) => {
    SetServiceVal(Number(e.target.value));
  };

  const handleFriendServiceChange = (e) => {
    SetFriendServiceVal(Number(e.target.value));
  };

  const avgServiceVal = (serviceVal + friendServiceVal) / 2 / 100;

  const tip = billNum * avgServiceVal;

  const handleReset = () => {
    SetBillNum("");
    SetServiceVal(0);
    SetFriendServiceVal(0);
  };

  return (
    <>
      <br />
      <br />
      <h1>Tip Calculator</h1>
      <br />
      <br />
      {/* <form> */}
      <Bill value={billNum} onChangeBillValue={handleBillValue} />
      <br />
      <br />
      <Service
        value={serviceVal}
        onChangeService={handleServiceChange}
        text='How did you like the service?'
      />
      <br />
      <br />
      <Service
        value={friendServiceVal}
        onChangeService={handleFriendServiceChange}
        text='How did your friend like the service?'
      />
      <br />
      <br />

      {billNum > 0 && (
        <>
          <h2>
            You pay ${billNum + tip} (${billNum} + ${tip})
          </h2>

          <br />
          <br />

          <button onClick={() => handleReset()}>Reset</button>
        </>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* </form> */}
    </>
  );
}
