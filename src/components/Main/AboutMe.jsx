import c from "../../styles/Main.module.css";

function AboutMe() {
    return (
        <div className={c.description}>
            <div className={c.avatar}></div>
            <ul className={c.description__info}>
                <li>Maksim T.</li>
                <li>Date of Birth: 27.04.2002</li>
                <li>City: Minsk</li>
                <li>Education: BSUIR</li>
                <li>Web Site: https://vk.com/makson_20177</li>
            </ul>
        </div>
    )
}

export default AboutMe;