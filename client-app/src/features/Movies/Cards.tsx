import React from "react";
import { Card } from "react-bootstrap";

interface Props{
    image: string;
    title: string;
    price: string | number;
}

export default function Cards({image, title, price}: Props) {
    return (
        <Card>
            {image !=="" && <Card.Img variant="top" src={image} style={{width: '100%', height:'15rem', objectFit:'contain'}}/>}
            <Card.Body>
                <Card.Title style={{minHeight : '5rem', height:'5rem', textAlign: 'center'}} title={title}>{title.substring(0,50)}</Card.Title>
                <Card.Text style={{float : 'right'}}>
                    {price}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}