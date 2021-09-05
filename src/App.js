import React, {useState} from 'react';
import logo from './logo.svg';
import Icon from "./components/Icon";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Card, CardBody, Container, Button, Col, Row} from "reactstrap"
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



const iteamArray = new Array(9).fill("empty")



const App = () => {
  const [isCross, setIsCross] = useState(false)
  const [winMessage, setWinMessage] = useState("")

  const reloadGame = () => {
    setIsCross(false);
    setWinMessage("");
    iteamArray.fill("empty", 0, 9);
  };

  const checkIsWinner = () => {
    if (iteamArray[0] === iteamArray[1] && 
      iteamArray[0] === iteamArray[2] &&
      iteamArray[0] !== "empty") {
        setWinMessage(`${iteamArray[0]} wins`)

      } else if (
        iteamArray[3] !== "empty" && 
        iteamArray[3] === iteamArray[4] &&
        iteamArray[4] === iteamArray[5]
      ){
        setWinMessage(`${iteamArray[3]} wins`)


      }else if(
        iteamArray[6] !== "empty" && 
        iteamArray[6] === iteamArray[7] &&
        iteamArray[7] === iteamArray[8]
        
      ){
        setWinMessage(`${iteamArray[6]} wins`)

      }else if(
        iteamArray[0] !== "empty" && 
        iteamArray[0] === iteamArray[3] &&
        iteamArray[3] === iteamArray[6]
      ){
        setWinMessage(`${iteamArray[0]} wins`)} else if(
          iteamArray[1] !== "empty" && 
          iteamArray[1] === iteamArray[4] &&
          iteamArray[4] === iteamArray[7]
        ){
          setWinMessage(`${iteamArray[1]} wins`);
        }else if(
          iteamArray[2] !== "empty" && 
          iteamArray[2] === iteamArray[5] &&
          iteamArray[5] === iteamArray[8]
        ){
          setWinMessage(`${iteamArray[2]} wins`);
        } else if(
          iteamArray[0] !== "empty" && 
          iteamArray[0] === iteamArray[4] &&
          iteamArray[4] === iteamArray[8]
        ){
          setWinMessage(`${iteamArray[0]} wins`);
        } else if(
          iteamArray[2] !== "empty" && 
          iteamArray[2] === iteamArray[4] &&
          iteamArray[4] === iteamArray[6]
        ){
          setWinMessage(`${iteamArray[2]} wins`);
        }

  };

  const changeIteam = iteamNumber => {
    if(winMessage) {
      return toast(winMessage, {type:"success" })
    }

    if(iteamArray[iteamNumber] == "empty") {
      iteamArray[iteamNumber] = isCross ? "cross" : "circle"
      setIsCross(!isCross)

    }else {
      return toast("already filled", {type:"error"})
    }
    checkIsWinner();

  };

 return (
   <Container className="p-5">
     <ToastContainer position="bottom-center" />
     <Row>
       <Col md={6} className="offset-md-3">
        {winMessage ? (
          <div className="mb-2 mt-2">
          <h1 className="text-sucess text-uppercase text-center">
          {winMessage}
          </h1>
         <Button 
         color="success"
         block
         onClick={reloadGame}>
         Reload the game
         </Button>

          
          </div>
        ) : (
          <h1 className="text-center text-warning">
          {isCross ? "Cross" : "Circle"} turns
          </h1>
        ) }
          <div className="grid">
          {
            iteamArray.map((item,index) => (
             <Card color="warning" onClick={ () => changeIteam(index)}>
             <CardBody className="box">
               <Icon name={item} />
             </CardBody>
             </Card> 
            )

            )
          }
          
          </div>
       </Col>
     </Row>
   </Container>
    
  );
}

export default App;
