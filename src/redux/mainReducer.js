const ADD_POST = "ADD-POST";
const CHANGE_POST_TEXT = "CHANGE-POST-TEXT";

let initialState = {
    allPosts: [
        {id: 1, likes: 3, text: "Happy New Year! And Merry Christmas!", image: "https://www.blast.hk/attachments/64805/" },
        {id: 2, likes: 1, text: "It was a good day, honey :)", image: "https://i.imgur.com/gqJvKwW.png" },
        {id: 3, likes: 7, text: "Why are you running, man?!", image: "https://krasivosti.pro/uploads/posts/2021-07/1625877530_26-krasivosti-pro-p-kot-v-adidase-koti-krasivo-foto-29.jpg" },
    ],
    postText: "",
}

const mainReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            let newPost = {
                id: 4,
                likes: 0,
                text: state.postText,
                image: "https://www.blast.hk/attachments/64805/"
            };
            if (state.postText !== "") {
                state.allPosts.push(newPost);
            }
            return {
                ...state,
                postText: "",
                allPosts: [...state.allPosts],
            }

        case CHANGE_POST_TEXT:
            return {
                ...state,
                postText: action.newText,
            }

        default:
            return state;
    }
}

export const addPostAction = () => ({type: ADD_POST});
export const changePostTextAction = (updateText) => ({type: CHANGE_POST_TEXT, newText: updateText});

export default mainReducer;