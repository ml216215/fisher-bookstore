import React from "react";
//import { AuthorCard } from "./AuthorCard";
//import { CardColumns } from "react-bootstrap";

export function AuthorsDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
                {props.authors.map(a => (
                   <p>{a.author}</p>
                ))}
        </div>
    );
}