import './App.css';
import {Navbar,Container,Nav} from 'react-bootstrap';
import Product from './components/product';

function App() {

  return (
    <div className="App">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">React-toy</Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#cart">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="main-bg"></div>
      <Container>
        <Product />
      </Container>
    </div>
  );
}

export default App;
