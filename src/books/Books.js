import React, { useEffect, useState } from "react";
//import "./Books.css";
import { BookDisplay } from "./BookDisplay";

//export default class Books extends Component {
    export default function Books(props) {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("https://localhost:5001/api/books/")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);
    //constructor(props) {
        //super(props);
        //this.state = {
            //books: [
               // {
                   // id: 1,
                   // title: "Domain Driven Design",
                   // author: "Eric Evans",
                   // isbn: "978-0321125217"
               // },
               // {
                   // id: 2,
                   // title: "Accelerate",
                   // author: "Nicole Forsgren",
                   // isbn: "978-1942788331"
               // },
               // {
                  //  id: 3,
                  // title: "The Great Gatsby",
                  //  author: "F. Scott Fitzgerald",
                  //  isbn: "978-0743273565"
               // },
               // {
                  //  id: 4,
                  //  title: "The Giver",
                  //  author: "Lois Lowry",
                  //  isbn: "978-0440237686"
               // },
               // {
                  //  id: 5,
                  //  title: "Candide",
                  //  author: "Voltaire",
                  //  isbn: "978-1640320413"
               // },
               // {
                   // id: 6,
                   // title: "Lord of the Flies",
                   // author: "William Golding",
                   // isbn: "978-0205309023"
               // },
               // {
                  //  id: 7,
                  //  title: "The Outsiders",
                  //  author: "S.E. Hinton",
                  //  isbn: "860-1410937034"
               // },
               // {
                  //  id: 8,
                  //  title: "The Graduate",
                  //  author: "Charles Webb",
                  //  isbn: "978-1433255458"
              //  }
           // ]
       // };
    
    
   // render() {
        //return (
            //<div className="Books">
                //<div className="lander">
                    //<BookDisplay books={this.state.books}  />
               // </div>
           // </div>
       // );
   // }
//}
    return (
        <div className="Books">
            <div className="lander">
                <BookDisplay books={data} />
            </div>
        </div>
    );
}
