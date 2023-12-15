import './App.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import { createContext, useState } from 'react';
import { Route,Routes, useNavigate, Outlet } from 'react-router-dom';
import data from './db/data';
import Detail from './routes/detail';
import Product from './components/product';

export let Context1 = createContext();

function App() {
  const [shoes] = useState(data);
  const [sale , setSales] = useState([10,11,12]);
  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-toy</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" onClick={()=>{navigate("/")}}>Home</Nav.Link>
              <Nav.Link href="/detail" onClick={()=>{navigate("/detail")}}>Detail</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Routes>
          <Route path='/' element={< Product shoes={shoes} />}/>
          <Route path='/detail/:id' element={
            <Context1.Provider value={{ sale, shoes}}>
              <Detail shoes={shoes} />
            </Context1.Provider>
          }/>
          <Route path='*' element={<div>404</div>}/>
          <Route path='/about' element={<About/>}>
            <Route path='member' element={<div>Member</div>}/>
            <Route path='location' element={<div>Location</div>}/>
          </Route>
          <Route path='/event' element={<Event/>}>
            <Route path='one' element={<div>첫 주문시 서비스</div>}/>
            <Route path='two' element={<div>생일 쿠폰 받기</div>}/>
          </Route>
        </Routes> 
      </Container>
    </div>
  );
}

function About() {
  return(
    <div>
      <h4>회사 정보 ABOUT</h4>
      <Outlet></Outlet>
    </div>
  )
}

function Event() {
  return(
    <div>
      <h1>오늘의 이벤트</h1>
      <Outlet></Outlet>
    </div>
  )
}

export default App;
