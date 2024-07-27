import './App.css';
import Body from './Components/Body';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
   <Container>
      <Row>
        <Col>1 of 2 left </Col>
        
        <Body />
        <Col>2 of 2 Right</Col>
      </Row>
    </Container>
  );
}

export default App;
