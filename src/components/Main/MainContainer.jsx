import Main from "./Main";
import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import { setUserProfile } from "../../redux/mainReducer";
import { withRouter } from "react-router";

class MainContainer extends React.Component {
    componentDidMount(){
        debugger
        let userID = this.props.match.params.userID;
        if(!userID){
            userID = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
        .then(response => {
            this.props.setUserProfile(response.data);
        });
    }

    render(){
        return (
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let URLContainer = withRouter(MainContainer);

let stateToProps = (state) => ({
    profile: state.mainPage.profile,
});

export default connect(stateToProps, {setUserProfile})(URLContainer);