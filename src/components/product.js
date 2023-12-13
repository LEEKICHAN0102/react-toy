import {Row,Col} from "react-bootstrap";

export default function Product(props) {
  const shoesSort = props.isSort
  ? [...props.shoes].sort((a,b) => a.title.localeCompare(b.title))
  : props.shoes;

  return (
    <Row>
      {shoesSort.map((e,i) => 
        <Col sm>
          <img src={`https://codingapple1.github.io/shop/shoes${i+1}.jpg`} width="80%" alt='shoes'/>
          <h4>{e.title}</h4>
          <p>{e.content}</p>
          <p>{e.price}</p>
        </Col>
      )}
    </Row>
  )
}