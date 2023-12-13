import {Row,Col} from "react-bootstrap";
import axios from "axios";
import { useState } from "react";

export default function Product(props) {
  const [newShoes, setNewShoes] = useState(props.shoes);
  const [clickCount , setClickCount] = useState(2);

  return (
    <Row>
      {newShoes.map((e,i) => 
        <Col sm>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt='shoes'/>
          <h4>{e.title}</h4>
          <p>{e.content}</p>
          <p>{e.price}</p>
        </Col>
      )}
      { clickCount !== 4 ? <button onClick={()=>{
        axios.get(`https://codingapple1.github.io/shop/data${clickCount}.json`)
        .then((response)=>{
          const newData = response.data;
          setNewShoes((prevShoes) => [...prevShoes, ...newData]);
        })
        .catch(()=>{
          console.log("error ㅋㅋ");
        });
        setClickCount(clickCount+1);
      }}>더 보기</button>
      : null
    }
    </Row>
  )
}