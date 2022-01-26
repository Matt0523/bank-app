import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function DepoMain(props) {
  const [depositAmount, setDepositAmount] = useState("");
  const [balanceValue, setBalanceValue] = useState(props.balanceValue);

  useEffect (() => {
    setBalanceValue
  })

  const financial = (num) => {
    return Number.parseFloat(num).toFixed(2);
  }

  const setNewBalance = () => {
    let balance = +balanceValue;
    let deposit = +depositAmount;
    let newBalance = financial(balance + deposit);
    setBalanceValue(newBalance);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNewBalance();
    alert(`Submitting Amount ${depositAmount}`);
  }

  const handleChange = (e) => {
    let val = e.target.value;
    console.log("val", val);
    if (val === '') {
      setDepositAmount(val);
    } else if (val.substring(0,1) === "-") {
      alert(`Enter positive numbers only`);
    } else if (isNaN(val)) {
      alert(`Enter numerical values only`);
    } else {
      setDepositAmount(val);
    }
  }

  return (
    <div>
      <p>Balance</p>
      <div className="balance-value">
        <p>{balanceValue}</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Deposit Amount
          <input
            type="text"
            value={depositAmount}
            onChange={handleChange}
          />
        </label>
        <input
          type="submit"
          value="DEPOSIT"
          disabled={!depositAmount}
        />
      </form>
    </div>

  );
}
