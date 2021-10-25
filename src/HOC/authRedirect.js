import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";

let stateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth,
});

export const authRedirect = Component => {
    class RedirectComponent extends React.Component{
        render(){
            if(!this.props.isAuth) return <Redirect to="/login"/>
            return <Component {...this.props}/>
        }
    }
    
    let ConectedAuthRedirectComponent = connect(stateToPropsForRedirect)(RedirectComponent);

    return ConectedAuthRedirectComponent;
}