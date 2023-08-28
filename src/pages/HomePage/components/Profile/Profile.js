import s from "./Profile.module.css"

function Profile() {
    return ( 
        <div className={s.content}>
            <div className={s.profile}>
                <div className={s.mainInfo}>
                    <h1>Hi, I am John,<br/> Creative Technologist</h1>
                    <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                </div>
                <img src="./media/john.png" alt="john"/>
            </div>
            <button>Download Resume</button>
        </div>
    );
}

export default Profile;