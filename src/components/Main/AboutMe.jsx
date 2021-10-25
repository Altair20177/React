import c from "../../styles/Main.module.css";
import Preloader from "../common/Preloader/Preloader";

function AboutMe(props) {
    if(!props.profile){
        return <Preloader/>
    }
    return (
        <div className={c.description}>
            <div className={c.avatar}>
                <img src={props.profile.photos.small} alt="аватарка" />
            </div>
            <ul className={c.description__info}>
                <li>{props.profile.fullName}</li>
                <li>{props.profile.aboutMe}</li>
                {props.profile.lookingForAJob ? <li>{props.profile.lookingForAJobDescription}</li> : <li>Работу не ищу</li>}
                <li>Контакты</li>
                <ul>
                    <li>Facebook: {props.profile.contacts.facebook}</li>
                    <li>Instagram: {props.profile.contacts.instagram}</li>
                    <li>VK: {props.profile.contacts.vk}</li>
                </ul>
                <li>City: Minsk</li>
                <li>Education: BSUIR</li>
                <li>Web Site: https://vk.com/makson_20177</li>
            </ul>
        </div>
    )
}

/* my ava "https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/a76ebd11ecf1ab90a360b056f49b90a0.jpg"
<li>Maksim T.</li>
<li>Date of Birth: 27.04.2002</li>
<li>City: Minsk</li>
<li>Education: BSUIR</li>
<li>Web Site: https://vk.com/makson_20177</li> */

export default AboutMe;