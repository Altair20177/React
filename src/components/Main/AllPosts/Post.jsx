import c from "../../../styles/Main.module.css";

function Post(props) {
    return (
        <div className ={c.posts}>
            <div className={c.old__posts}>
                <img src={props.image} alt="avatar" />
                <p>{props.text}</p>
            </div>
            <span> {props.likes} like</span>
            <span className = {c.dislike}>dislike</span>
        </div>
    )
}

export default Post;