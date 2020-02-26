import React from "react";
import { Card, Button } from "react-bootstrap";

export function AuthorCard(props) {
    return (
        <Card style={{ width: "16em" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/150"  />
            <Card.Body>
                <Card.Title>{props.author.author}</Card.Title>
                <Card.Text>Birth: {props.author.birth}</Card.Text>
                <Card.Text>Nationality: {props.author.nationality}</Card.Text>
                <Button variant="warning">Profile</Button>
            </Card.Body>
        </Card>
    );
}