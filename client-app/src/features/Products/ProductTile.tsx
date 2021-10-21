import React from "react";
import { Card } from "react-bootstrap";
import { Products } from "../../models/Products";

interface Props{
    product: Products
}


export default function ProductTile({product}: Props) {
    return (
        <Card>
            <Card.Img variant="top" src={product.image} style={{width: '100%', height:'15rem', objectFit:'cover'}}/>
            <Card.Body>
                <Card.Title style={{minHeight : '5rem', height:'5rem'}} title={product.title}>{product.title.substring(0,50)}...</Card.Title>
                <Card.Text style={{float : 'right'}}>
                    $ {product.price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}