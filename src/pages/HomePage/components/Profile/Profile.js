import s from "./Profile.module.css"

function Profile() {
    return ( 
        <div className={s.content}>
            <div className={s.profile}>
                <div className={s.mainInfo}>
                    <h1>Hi, I am John,<br/> Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <img src="./john.png" alt="john" className={s.profileImg}/>
            </div>
            <a href="https://cdn-images.livecareer.co.uk/pages/free_cv_templates_lcuk_11.jpg" download className={s.download_link}>Download Resume</a>
        </div>
    );
}

export default Profile;