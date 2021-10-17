import React from "react";
import c from "../../../styles/MyPost.module.css";
import Post from "./Post";

function NewPost(props) {
    let showPosts = props.allPosts.map(post => <Post likes={post.likes} text={post.text} key={post.id} image={post.image} />);

    let addPostLink = React.createRef();

    let onAddPost = () => {
        props.addPost()
    };

    let updatePostText = () => {
        debugger;
        let updateText = addPostLink.current.value;
        props.changePostText(updateText);
    };

    return (
        <div>
            <div className={c.post}>
                <div className={c.myPosts}>My posts</div>
                <div>
                    <textarea onChange={updatePostText} ref={addPostLink} className={c.newPost} value={props.postText} placeholder="New Post..." />
                </div>
                <button onClick={onAddPost} className={c.sendPost}>Send</button>
            </div>
            <div>{showPosts}</div>
        </div>
    )
}

export default NewPost;