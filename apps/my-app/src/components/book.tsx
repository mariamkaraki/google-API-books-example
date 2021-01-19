import React from "react";
import { Card } from 'react-bootstrap'; 

const DEFAULT_BOOK_IMAGE =
  "./assets/images/bookDefault.png";


const Book = ({ book }) => {

  let item = book.volumeInfo;
  let author = item.authors;
  let title = item.title;
  let desc = item.description;
  if (typeof desc === 'undefined') {
    desc = 'No description available';
  }

  if (typeof author === 'undefined') {
    author = 'No author';
  }
  
  
  return (
            <Card>  
                <Card.Img src={book.volumeInfo.imageLinks === undefined ? DEFAULT_BOOK_IMAGE : book.volumeInfo.imageLinks.thumbnail} alt={book.title} />  
                <Card.Body> 
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>{author}</Card.Subtitle>
                    <Card.Text><small className="text-muted">{desc.slice(
                        0,
                        150
                        ) + '...'}</small></Card.Text>

                    <Card.Link href={book.volumeInfo.previewLink} target="_blank">Know more</Card.Link>
                                    
                </Card.Body>  
            </Card> 
  );
};


export default Book;