import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState , useEffect } from "react";

export default function Detail(props) {
  let {id} = useParams();

  const [isGone, setIsGone] = useState(true);
  const [isNumber, setIsNumber] = useState(false);
  const [inputVal , setInputVal] = useState("");

  useEffect(()=>{
    const timer = setTimeout(()=> {setIsGone(false)}, 2000);
    const isRealNum = /^[0-9]+$/.test(inputVal);
    if(isRealNum){
      setIsNumber(true);
    }

    return () => {
      clearTimeout(timer);
    }
  },[inputVal]);

  return (
    <div className="container">
      <Btn bg="teal">버튼 입니당</Btn>
      {isGone ? <div className="isGone">2초 이내 구매시 할인!</div> : <div>2초 지남 ㅋㅋ</div>}
      {isNumber ?  null : <Warning bg="red">숫자만 입력해주세요;;</Warning>}
      <input type="text" placeholder="숫자만~" value={inputVal}  onChange={(e) => setInputVal(e.target.value)} />
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

const Warning = styled.div`
  background-color: ${ (props) => props.bg};
  color: white;
  padding: 20px;
`;