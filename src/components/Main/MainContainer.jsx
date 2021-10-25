import Main from "./Main";
import React from "react";
import { connect } from "react-redux";
import { setUserThunkCreator } from "../../redux/mainReducer";
import { withRouter } from "react-router";
import { authRedirect } from "../../HOC/authRedirect";

class MainContainer extends React.Component {
    componentDidMount(){
        let userID = this.props.match.params.userID;
        console.log(this.props.match);

        this.props.setUserThunkCreator(userID);
    }

    render(){
        //if(!this.props.isAuth) return <Redirect to="/login"/>

        return (
            <Main {...this.props} profile={this.props.profile}/>
        )
    }
}

let AuthRedirectComponent = authRedirect(MainContainer);

let URLContainer = withRouter(AuthRedirectComponent);

let stateToProps = (state) => ({
    profile: state.mainPage.profile,
});

export default connect(stateToProps, {setUserThunkCreator})(URLContainer);