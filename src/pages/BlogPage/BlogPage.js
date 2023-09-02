import s from "./BlogPage.module.css"

function BlogPage() {
  return (
    <div className={s.content}>
      <h1 className={s.blogH1}>Blog</h1>
      <div>
        <div className={s.blog}>
            <h2 className={s.darkBlue}>UI Interactions of the week</h2>
            <p className={s.darkBlue}>12 Feb 2019   |   <span>Express, Handlebars</span></p>
            <p className={s.darkBlue}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className={s.blog}>
            <h2 className={s.darkBlue}>UI Interactions of the week</h2>
            <p className={s.darkBlue}>12 Feb 2019   |   <span>Express, Handlebars</span></p>
            <p className={s.darkBlue}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className={s.blog}>
            <h2 className={s.darkBlue}>UI Interactions of the week</h2>
            <p className={s.darkBlue}>12 Feb 2019   |   <span>Express, Handlebars</span></p>
            <p className={s.darkBlue}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>

        <div className={s.blog}>
            <h2 className={s.darkBlue}>UI Interactions of the week</h2>
            <p className={s.darkBlue}>12 Feb 2019   |   <span>Express, Handlebars</span></p>
            <p className={s.darkBlue}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPage
