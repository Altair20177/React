import React from "react";

class Status extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
            status: this.props.status,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
            status: this.props.status,
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        });
    }

    componentDidUpdate(prevProps, prevState){
        if(prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input onChange={this.onStatusChange} autoFocus={true}
                    onBlur={this.deactivateEditMode} value={this.state.status}></input>
                    : <span onDoubleClick={this.activateEditMode}>{this.props.status || "-----"}</span>
                }
            </div>
        )
    }
}

export default Status;