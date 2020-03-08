import React from 'react';
import {Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import '../styles/MovieList.css';

function MovieList({title,synopsis, year, image, trailer, opacity}) {
  return (
    <>
        <Card style={{ width: '20rem', height: '38.125rem', margin: '1em 0em', opacity: `${opacity}` }}>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title style={{ minHeight: '2em'}}>{title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem></ListGroupItem>
            <ListGroupItem><b>Year: </b> {year}</ListGroupItem>
            <ListGroupItem className="text-justify" style={{height: '13.563rem'}}>
              {synopsis}
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href={trailer} target="_blank">Trailer</Card.Link>
          </Card.Body>
        </Card>
    </>);
}

export default MovieList;

