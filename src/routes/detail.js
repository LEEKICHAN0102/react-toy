import { Nav } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useState , useEffect } from "react";

export default function Detail(props) {
  let {id} = useParams();

  const [isGone, setIsGone] = useState(true);
  const [isNumber, setIsNumber] = useState(false);
  const [inputVal , setInputVal] = useState("");
  const [tab, setTab] = useState(0);
  const [fade, setFade] = useState("");

  useEffect(()=>{
    const timer = setTimeout(()=> {setIsGone(false)}, 2000);
    const isRealNum = /^[0-9]+$/.test(inputVal);
    if(isRealNum){
      setIsNumber(true);
    }
    setTimeout(()=>{setFade("end")},100);

    return () => {
      clearTimeout(timer);
    }
  },[inputVal, fade]);

  return (
    <div className={`container start ${fade}`}>
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
      <Nav variant="tabs"  defaultActiveKey="link0">
        <Nav.Item>
          <Nav.Link eventKey="link0" onClick={()=>{setTab(0)}}>버튼0</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link1" onClick={()=>{setTab(1)}}>버튼1</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link2" onClick={()=>{setTab(2)}}>버튼2</Nav.Link>
        </Nav.Item>
      </Nav>
      <TabComponent tab={tab} />
    </div> 
  );
}

function TabComponent({tab}) {
  const [fade, setFade] = useState("");

  useEffect(()=>{
    setTimeout(()=>{setFade("end")},100);

    return ()=>{
      setFade("");
    }
  },[tab])

  return (<div className={`start ${fade}`}>
    {[<div>내용 0</div>, <div>내용 1</div>, <div>내용 2</div> ][tab]}
  </div>)
  
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