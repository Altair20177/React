import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {authThunkCreator} from "../../redux/authReducer";

class HeaderContainer extends React.Component{
    componentDidMount(){
        this.props.authThunkCreator();
    }

    render(){
        return(
            <Header {...this.props}/>
        )
    }
}

const stateToProps = state =>({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});


export default connect(stateToProps, {authThunkCreator})(HeaderContainer);