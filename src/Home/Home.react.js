import React from 'react';
import DisplayCamp2 from '../DisplayCamp2/DisplayCamp.react';
import CheckAvailability from '../CheckAvailability/CheckAvailability.react'
export default class Home extends React.Component {

    constructor() {
        super()
        this.state = { 
            "login":false,
            

         
        }
    }
    
     
    render(){
        return(

            <div className="container">
                
                
                 <br/>
                 <br/>
                 <br/>
            <div class="search-blood-donors">
                <h1>Search Blood Donors</h1>
                <CheckAvailability/>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <h1>Blood Donation Camps</h1>
                <DisplayCamp2/>
               
                 
                 
                
                
            </div>
        )
    }
}