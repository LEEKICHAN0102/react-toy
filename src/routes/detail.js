import { useParams } from "react-router-dom";
import styled from "styled-components";

export default function Detail(props) {

  let {id} = useParams();

  return (
    <div className="container">
      <Btn bg="teal">버튼 입니당</Btn>
      <div className="row">
        <div className="col-md-6">
          <img src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" alt='shoes' />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button> 
        </div>
      </div>
    </div> 
  );
}

const Btn = styled.div`
  background-color: ${ (props) => props.bg};
  color: ${props => props.bg === "teal" ? "white" : "black"};
  padding: 20px;
`;