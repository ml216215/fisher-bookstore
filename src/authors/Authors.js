import React, { Component } from "react";
import "./Authors.css";
import { AuthorsDisplay } from "./AuthorsDisplay";

export default class Authors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authors: [
                {
                    id: 1,
                    author: "F. Scott Fitzgerald",
                    birth: "1896",
                    nationality: "American"
                },
                {
                    id: 2,
                    author: "Lois Lowry",
                    birth: "1937",
                    nationality: "American"
                },
                {
                    id: 3,
                    author: "Voltaire",
                    birth: "1694",
                    nationality: "French"
                },
                {
                    id: 4,
                    author: "William Golding",
                    birth: "1911",
                    nationality: "British"
                },
                {
                    id: 5,
                    author: "S.E. Hinton",
                    birth: "1948",
                    nationality: "American"
                },
                {
                    id: 6,
                    author: "Charles Webb",
                    birth: "1939",
                    nationality: "American"
                }
            ]
        };
    }
    
    render() {
        return (
            <div className="Authors">
                <div className="lander">
                    <AuthorsDisplay books={this.state.authors}  />
                </div>
            </div>
        );
    }
}
