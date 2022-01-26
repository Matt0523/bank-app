import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function WithdrawMain(props) {
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [balanceValue, setBalanceValue] = useState(props.balanceValue);

  const financial = (num) => {
    return Number.parseFloat(num).toFixed(2);
  };

  const setNewBalance = (balance, withdraw) => {
    let newBalance = financial(balance - withdraw);
    setBalanceValue(newBalance);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    let balance = +balanceValue;
    let withdraw = +withdrawAmount;
    if (withdraw > balance) {
      alert(
        `Transaction Failed: Attempting to withdraw more than the available balance`
      );
    } else {
      setNewBalance(balance, withdraw);
      alert(`Submitting Amount ${withdrawAmount}`);
    }
  };

  const handleChange = (e) => {
    let val = e.target.value;
    console.log("val", val);
    if (val === "") {
      setWithdrawAmount(val);
    } else if (val.substring(0, 1) === "-") {
      alert(`Enter positive numbers only`);
    } else if (isNaN(val)) {
      alert(`Enter numerical values only`);
    } else {
      setWithdrawAmount(val);
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
              <Form.Label>Withdraw Amount</Form.Label>
              <Form.Control
                type="text"
                value={withdrawAmount}
                onChange={handleChange}
              />
            </Form.Group>
            <Button
              className="deposit-submit"
              variant="primary"
              type="submit"
              disabled={!withdrawAmount}
            >
              WITHDRAW
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
