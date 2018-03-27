import React, { Component } from "react";

class Route1 extends Component {
    constructor(props){
        super(props);
        this.state = {
            people: [
                'Shea',
                'Erik',
                'Jin',
                'Larry'
            ]
        };
    }

render(){
    
    return (
       <div className="">
          {this.state.people.map(person => {
            return (
                <div className="">
                 <Link to={`/Route2/${person}`}> {person} </Link>
             </div>
            );
        })}
        </div>
    );
  } 
}


export default Route1