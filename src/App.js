import React, { useState } from "react";

import Icon from "./components/Icon";
import { Card, CardBody, Container, Button, Col, Row } from "reactstrap";

import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
const itemArray = new Array(9).fill("empty");
function App() {
  const [isCross, setIsCross] = useState("empty");
  const [winMessage, setWinMessage] = useState("");

  const reloadGame = () => {
    // reload Game
    setIsCross(false);
    setWinMessage("");
    itemArray.fill("empty", 0, 9);
  };
  const checkIfWinner = () => {
    // check if winnner
    // win mesage
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinMessage(`${itemArray[3]} won`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[6]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinMessage(`${itemArray[1]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinMessage(`${itemArray[0]} won`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinMessage(`${itemArray[2]} won`);
    }
  };
  const changeItem = (idx) => {
    // console
    console.log(idx);
    if (winMessage) {
      return alert("Winner Winner Chicken Dinner");
    }
    if (itemArray[idx] === "empty") {
      itemArray[idx] = isCross ? "cross" : "circle";
      setIsCross(!isCross);
    } else {
      alert("Item Already Filled");
    }
    checkIfWinner();
  };
  return (
    <Container>
      <Row>
        <Col md={6} className="offset-md-3">
          <h1 className="text-warning text-center text-uppercase">
            Tic Tac Toe App
          </h1>
          {winMessage ? (
            <div className="my-2">
              <h1 className="text-uppercase text-success my-2 text-center">
                {winMessage}
              </h1>
              <Button onClick={() => reloadGame()} color="danger" block>
                Reload Game
              </Button>
            </div>
          ) : (
            <h1 className="text-center text-warning">
              {isCross ? "Cross" : "Circle"} turns
            </h1>
          )}
          <div className="grid">
            {itemArray.map((item, idx) => {
              return (
                <Card onClick={() => changeItem(idx)} color="warning" key={idx}>
                  <CardBody className="box">
                    <Icon name={item} />
                  </CardBody>
                </Card>
              );
            })}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
