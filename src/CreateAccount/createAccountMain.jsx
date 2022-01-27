import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function CreateAccount() {
  const [show, setShow] = React.useState(false);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const UserContext = React.createContext(null); // Had to define UserContext but not sure what it is doing on this page exactly
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      alert(`${label} field cannot be blank`);
      return false;
    }
    return true;
  }

  function passwordValidate(field, label) {
    if (!field || field.length < 8) {
      alert(
        `${label} field cannot be blank and must be at least 8 characters long`
      );
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log(name, email, password);
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!passwordValidate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 100 });
    setShow(true);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(false);
  }

  return (
    <Card bgcolor="primary" header="Create Account" status={status}>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              value={name}
              className="account-form-control"
              onChange={(e) => setName(e.currentTarget.value)}
            />
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="text"
              value={email}
              className="account-form-control"
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text"
              value={password}
              className="account-form-control"
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </Form.Group>
          <Button
            type="submit"
            className="account-submit"
            onClick={handleCreate}
          >
            Create Account
          </Button>
          <div
            className="success-message"
            style={{ display: show ? "block" : "none" }}
          >
            <h5>Success</h5>
            <Button
              type="submit"
              className="account-submit"
              onClick={clearForm}
            >
              Add Another account
            </Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
}
