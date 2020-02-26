import React from "react";
//import { AuthorCard } from "./AuthorCard";
import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
            <CardColumns>
                {props.authors.map(a => (
                    <p>{a.author}</p>
                ))}
            </CardColumns>
        </div>
    );
}