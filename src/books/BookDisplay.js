import React from "react";
import { BookCard } from "./BookCard";
import { CardColumns } from "react-bootstrap";

export function BookDisplay(props) {
    return (
        <div className="display">
            <h3>Books</h3>
            <CardColumns>
                {props.books.map(b => (
                    <BookCard book={b} key={b.id} />
                ))}
            </CardColumns>
        </div>
    );
}