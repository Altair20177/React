import Post from "./Post";

function Posts() {
    return (
        <div className="posts">
            <Post likes="3" text="Happy New Year! And Merry Christmas!" image= "https://www.blast.hk/attachments/64805/"/>
            <Post likes="1" text="It was a good day, honey :)" image = "https://i.imgur.com/gqJvKwW.png"/>
            <Post likes="7" text="Why are you running, man?!" image="https://krasivosti.pro/uploads/posts/2021-07/1625877530_26-krasivosti-pro-p-kot-v-adidase-koti-krasivo-foto-29.jpg"/>
        </div>
    )
}

export default Posts;