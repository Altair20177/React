import Main from "./Main";
import React from "react";
import { connect } from "react-redux";
import { setUserThunkCreator } from "../../redux/mainReducer";
import { withRouter } from "react-router";
import { authRedirect } from "../../HOC/authRedirect";
import { compose } from "redux";

class MainContainer extends React.Component {
    componentDidMount(){
        let userID = this.props.match.params.userID;
        console.log(this.props.match);

        this.props.setUserThunkCreator(userID);
    }

    render(){
        return (
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let stateToProps = (state) => ({
    profile: state.mainPage.profile,
});

export default compose(
    connect(stateToProps, {setUserThunkCreator}),
    withRouter,
    authRedirect
)(MainContainer)