import React from "react";
//import { AuthorCard } from "./AuthorCard";
//import { CardColumns } from "react-bootstrap";

export function AuthorDisplay(props) {
    return (
        <div className="display">
            <h3>Authors</h3>
                {props.authors.map(a => (
                   <p align="center">
                    Author: {a.author} <br>
                    </br>
                    Birth Year: {a.birth} <br>
                    </br>
                    Nationality: {a.nationality}
                   </p>
                ))}
        </div>
    );
}