import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect} from "react-router-dom";
import './DonorHomePage.css';
import DonorProfile from '../DonorProfile/DonorProfile.react';
import EditProfile from '../EditProfile/EditProfile.react';
// import FetchDonationCamps from '../../FetchDonationCamps/FetchDonationCamps.react';
import DisplayCamp from '../../DisplayCamp/DisplayCamp.react';

class DonorHomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            redirect:false,
            
        }
    }
    componentDidMount(){
        
    }
    handleClick=()=>{
        this.setState({redirect:true})
    }

    render() {
        if(this.state.redirect){
            return(
                <Router>
                <Redirect to='/editProfile/' />
                    <Route path='/editProfile/' component={EditProfile}></Route>
                </Router>
            )
        }
        else{return (
            <div className='donorhomepage_wrapper'>
                <br>
                </br>
                <br/>
                <br></br>
                <p> Donor Home Page</p>
                
                <button onClick={this.handleClick}>Edit Profile</button>
                <DonorProfile id={this.props.donorID}></DonorProfile>
                <DisplayCamp donorID={this.props.donorID}></DisplayCamp>
                {/* <FetchDonationCamps></FetchDonationCamps> */}
            </div>
        );}
    }
}

export default DonorHomePage;