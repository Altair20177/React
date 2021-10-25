import Main from "./Main";
import React from "react";
import { connect } from "react-redux";
import { setUserProfile, setUserThunkCreator } from "../../redux/mainReducer";
import { withRouter } from "react-router";
import { authAPI, usersAPI } from "../../API/API";

class MainContainer extends React.Component {
    componentDidMount(){
        let userID = this.props.match.params.userID;

        this.props.setUserThunkCreator(userID);
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

export default connect(stateToProps, {setUserProfile, setUserThunkCreator})(URLContainer);