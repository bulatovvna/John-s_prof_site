import s from "./RecentPosts.module.css"

function RecentPosts() {
    return ( 
        <div className={s.main}>
            <div className={s.content}>
                <div className={s.recent_menu}>
                    <p className={s.recent_posts_p}>Recent posts</p>
                    <p className={s.view}>View all</p>
                </div>
                <div className={s.posts}>
                    <div className={s.post}>
                        <h2>Making a design system from <br/> scratch</h2>
                        <p>12 Feb 2020    |    Design, Pattern</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>

                    <div className={s.post}>
                        <h2>Creating pixel perfect icons in <br/> Figma</h2>
                        <p>12 Feb 2020    |    Figma, Icon Design</p>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RecentPosts;