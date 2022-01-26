import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function DepoMain(props) {
  const [depositAmount, setDepositAmount] = useState("");
  const [balanceValue, setBalanceValue] = useState(props.balanceValue);

  const financial = (num) => {
    return Number.parseFloat(num).toFixed(2);
  };

  const setNewBalance = () => {
    let balance = +balanceValue;
    let deposit = +depositAmount;
    let newBalance = financial(balance + deposit);
    setBalanceValue(newBalance);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setNewBalance();
    alert(`Submitting Amount ${depositAmount}`);
  };

  const handleChange = (e) => {
    let val = e.target.value;
    console.log("val", val);
    if (val === "") {
      setDepositAmount(val);
    } else if (val.substring(0, 1) === "-") {
      alert(`Enter positive numbers only`);
    } else if (isNaN(val)) {
      alert(`Enter numerical values only`);
    } else {
      setDepositAmount(val);
    }
  };

  return (
    <div>
      <Card className="deposit-card">
        <Card.Body>
          <div className="deposit-balance-row">
            <Card.Title className="deposit-card-title">Balance</Card.Title>
            <Card.Text className="deposit-card-value">{balanceValue}</Card.Text>
          </div>
          <Form className="deposit-card-form" onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Deposit Amount</Form.Label>
              <Form.Control
                type="text"
                value={depositAmount}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="deposit-submit"
              variant="primary"
              type="submit"
              disabled={!depositAmount}
            >
              DEPOSIT
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
