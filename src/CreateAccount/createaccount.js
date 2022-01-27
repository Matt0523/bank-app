import React from "react";
import {CreareAccount} from "./createaccountMain"; 

function Account() {
  return(
  <div>
    <h1>Create Account</h1>
    <div className="deposit-container">
    <CreareAccount/>
    </div>
  </div>
  );
}

export { Account };