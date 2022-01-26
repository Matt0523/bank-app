/* <Card>
    <Card.Body>
      <Card.Title>Balance</Card.Title>
      <Card.text>{balanceValue}</Card.text>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Deposit Amount</Form.Label>
          <Form.Control type="text" value={depositAmount} onChange={handleChange}/>
        </Form.Group>
        <Button variant="primary" type="submit">
          DEPOSIT
        </Button>
      </Form>

    </Card.Body>
  </Card> 
  
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
  
  
  
  
  */
