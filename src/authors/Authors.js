import React, { useEffect, useState } from "react";
//import "./Authors.css";
import { AuthorDisplay } from "./AuthorDisplay";

//export default class Authors extends Component {
    export default function Authors(props) {
        const [data, setData] = useState([]);

        useEffect(() => {
            fetch("https://localhost:5001/api/authors/")
            .then(response => response.json())
            .then(data => setData(data));
        }, []);
    //constructor(props) {
       // super(props);
       // this.state = {
       //     authors: [
        //        {
        //            id: 1,
        //            author: "F. Scott Fitzgerald",
        //            birth: "1896",
        //            nationality: "American"
        //        },
         //       {
          //          id: 2,
          //          author: "Lois Lowry",
          //          birth: "1937",
          //          nationality: "American"
          //      },
          //      {
          //          author: "Voltaire",
           //         birth: "1694",
           //         nationality: "French"
           //     },
           //     {
           //         id: 4,
           //         author: "William Golding",
           //         birth: "1911",
           //         nationality: "British"
           //     },
           //     {
           //         id: 5,
           //         author: "S.E. Hinton",
           //         birth: "1948",
           //         nationality: "American"
           //     },
           //     {
            //        id: 6,
            //        author: "Charles Webb",
            //        birth: "1939",
            //        nationality: "American"
            //    }
           // ]
      //  };
  //  }
    
        return (
             <div className="Authors">
                <div className="lander">
                 <AuthorDisplay authors={data} />
                 </div>
            </div>
       );   
   // render() {
     //   return (
     //       <div className="Authors">
     //           <div className="lander">
    //                <AuthorDisplay authors={this.state.authors}  />
    //            </div>
   //         </div>
   //     );
  //  }
}
