import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import {setAuthUserData} from "../../redux/authReducer";
import { authAPI } from "../../API/API";

class HeaderContainer extends React.Component{
    componentDidMount(){
        authAPI.authUser().then(response => {
            if(response.resultCode === 0){
                this.props.setAuthUserData(response.data.id, response.data.email, response.data.login);
            }
        })
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


export default connect(stateToProps, {setAuthUserData})(HeaderContainer);