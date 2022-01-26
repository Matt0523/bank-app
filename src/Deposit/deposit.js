import React from "react";
import { DepoMain } from "./depoMain";

function Deposit() {
  return (
    <div>
      <h1>Deposit</h1>
      <div className="deposit-container">
        <DepoMain balanceValue={30.26} />
      </div>
    </div>
  );
}

export { Deposit };
