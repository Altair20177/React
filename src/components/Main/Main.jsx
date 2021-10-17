import AboutMe from "./AboutMe";
import c from "../../styles/Main.module.css";
import NewPostContainer from "./AllPosts/NewPostContainer";

function Main() {
    return (
        <main className={c.content}>
            <div className={c.background}></div>
            <AboutMe/>
            <NewPostContainer/>
        </main>
    )
}

export default Main;