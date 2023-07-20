import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
function Home() {

return( 

    <>
    <div className='gympic'>
    <img className='II'src="/images/gym1.jpg" alt="" /> 
   <img className='II' src="/images/gym2.jpg" alt="" /> 
   <img className='II' src="/images/gym3.jpg" alt="" /> 
    </div>

    <div className='card3'>
        <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/gym5.jpg" alt="" />
      <Card.Body>
        <Card.Title>Workout Inspiration</Card.Title>
    
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>View hundreds of workouts</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> <Link to={`/workoutff`}><Button variant="outline-dark">View</Button></Link></Card.Link>
      </Card.Body>
    </Card>
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/hh.jpg" alt="" />
      <Card.Body>
        <Card.Title>Meals</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Track your meals here</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> <Link to={`/diet`}><Button variant="outline-dark">View</Button></Link></Card.Link>
      </Card.Body>
    </Card>
    <Card className='cards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="/images/gym4.jpg" alt="" />
      <Card.Body>
        <Card.Title>Workout Tracker</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Log your Workouts</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#"> <Link to={`/workout`}><Button variant="outline-dark">View</Button></Link></Card.Link>
      </Card.Body>
    </Card>
    </div>
     
  </>





)










}

export default Home;