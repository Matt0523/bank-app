import React from "react";
import { CreateAccount } from "./createAccountMain.jsx";

function Account() {
  return (
    <div>
      <h1>Create Account</h1>
      <div className="deposit-container">
        <CreateAccount />
      </div>
    </div>
  );
}

export { Account };
