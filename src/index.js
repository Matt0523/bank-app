import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Routes, Route } from "react-router-dom";
import { NavBar } from "./navbar";
import { Home } from "./home";
import { CreateAccount } from "./createaccount";
import { Login } from "./login";
import { Deposit } from "./Deposit/deposit";
import { Withdraw } from "./Withdraw/withdraw";
import { Balance } from "./balance";
import { AllData } from "./alldata";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const UserContext = React.createContext(null);

function Spa() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createaccount/" element={<CreateAccount />} />
            {/* <Route path="/login/" element={<Login />} /> */}
            <Route path="/deposit/" element={<Deposit />} />
            <Route path="/withdraw/" element={<Withdraw />} />
            {/* <Route path="/balance/" element={<Balance />} /> */}
            <Route path="/alldata/" element={<AllData />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
