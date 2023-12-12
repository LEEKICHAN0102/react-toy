import data from '../db/data';
import { useState } from 'react';
import {Row,Col} from "react-bootstrap";

export default function Product() {
  const [shoes] = useState(data);

  return (
    <Row>
      {shoes.map((e,i) => 
        <Col sm>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt='shoes2'/>
          <h4>{e.title}</h4>
          <p>{e.content}</p>
          <p>{e.price}</p>
        </Col>
      )}
    </Row>
  )
}