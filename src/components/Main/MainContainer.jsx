import Main from "./Main";
import React from "react";
import { connect } from "react-redux";
import { setUserThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator } from "../../redux/mainReducer";
import { withRouter } from "react-router";
import { authRedirect } from "../../HOC/authRedirect";
import { compose } from "redux";

class MainContainer extends React.Component {
    componentDidMount(){
        let userID = this.props.match.params.userID;

        this.props.setUserThunkCreator(userID);
        this.props.getUserStatusThunkCreator(userID);
    }

    render(){
        return (
            <Main profile={this.props.profile} status={this.props.status} 
            updateStatus={this.props.updateUserStatusThunkCreator}/>
        )
    }
}

let stateToProps = (state) => ({
    profile: state.mainPage.profile,
    status: state.mainPage.status
});

export default compose(
    connect(stateToProps, {setUserThunkCreator, getUserStatusThunkCreator, updateUserStatusThunkCreator}),
    withRouter
)(MainContainer)