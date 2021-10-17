import React from "react";
import usersReducer from "../../redux/usersReducer";

let renderUsers = () => {
    return (
        <div>
            Users
        </div>
    )
}

function Users(props) {
    return (
        <div>
            {renderUsers()}
        </div>
    )
}

export default Users;