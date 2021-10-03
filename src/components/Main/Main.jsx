import AboutMe from "./AboutMe";
import Posts from "./AllPosts/Posts";
import NewPost from "./AllPosts/NewPost";
import c from "../../styles/Main.module.css";

function Main() {
    return (
        <main className={c.content}>
            <div>
                <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="" />
            </div>
            <AboutMe/>
            <NewPost/>
            <Posts/>
        </main>
    )
}

export default Main;