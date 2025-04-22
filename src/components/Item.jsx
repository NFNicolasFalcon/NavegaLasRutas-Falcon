import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'

const Item = ({producto}) => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.img} />
        <Card.Body>
        <Card.Title>{producto.name}</Card.Title>
        <Card.Text>
          ${producto.price},00
        </Card.Text>
        <a className='btn btn-primary' href='./Item.jsx${producto.id}'>Ver mas</a>
        <>
       
        </>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item