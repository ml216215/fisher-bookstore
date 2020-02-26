import React from "react";
//import { AuthorCard } from "./AuthorCard";
//import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
                {props.authors.map(a => (
                   <p>{a.author.author}</p>,
                   <p>{a.author.birth}</p>,
                   <p>{a.author.nationality}</p>
                ))}
        </div>
    );
}