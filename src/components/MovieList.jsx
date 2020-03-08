import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';


function MovieList({title,synopsis, year, image}) {
  return (
          <>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title style={{ minHeight: '3em'}}>{title}</Card.Title>
                  <Card.Text>
                    {synopsis}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem></ListGroupItem>
                  <ListGroupItem><b>Year: </b> {year}</ListGroupItem>
                  <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
                  <ListGroupItem>Vestibulum at eros</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Card Link</Card.Link>
                </Card.Body>
              </Card>
          </>);
}

export default MovieList;

