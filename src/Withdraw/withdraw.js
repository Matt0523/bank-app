import React from "react";
import { WithdrawMain } from "./withdrawMain";

function Withdraw() {
  return (
    <div>
      <h1>Withdraw</h1>
      <div className="deposit-container">
        <WithdrawMain balanceValue={30.26} />
      </div>
    </div>
  );
}

export { Withdraw };
