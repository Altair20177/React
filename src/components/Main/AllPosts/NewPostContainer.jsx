import { connect } from "react-redux";
import { addPostAction, changePostTextAction } from "../../../redux/mainReducer";
import NewPost from "./NewPost";

let storeToProps = (state) => {
    return{
        allPosts: state.mainPage.allPosts,
        postText: state.mainPage.postText
    }
}

let dispatchToProps = (dispatch) => {
    return{
        changePostText: (updateText) => {
            dispatch(changePostTextAction(updateText))
        },
        addPost: () => {
            dispatch(addPostAction())
        },

    }
}

const NewPostContainer = connect(storeToProps, dispatchToProps)(NewPost);

export default NewPostContainer;