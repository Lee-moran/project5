import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import logo from '../../assets/logo.png'

function learn() {
  return (
    <Card style={{ width: '20rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
        <Card.Title>Python Master class</Card.Title>
        <Card.Text>
          Come explore the wonderful world of Python
        </Card.Text>
        <Button variant="primary"> Explore </Button>
      </Card.Body>
    </Card>
    
  );
}

export default learn;