import s from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <div className={s.content}>
        <div className={s.links}>
            <a href='https://www.linkedin.com/in/gyuzyal-aidarkhanova-4a7766269'>
                <img src='./media/fb.png' alt='facebook'/>
            </a>
            <a href='https://instagram.com/bulatovvna?igshid=OGQ5ZDc2ODk2ZA=='>
                <img src='./media/insta.png' alt='instagram'/>
            </a>
            <a href='https://instagram.com/bulatovvna?igshid=OGQ5ZDc2ODk2ZA=='>
                <img src='./media/Group.png' alt='twitter'/>
            </a>
            <a href='https://www.linkedin.com/in/gyuzyal-aidarkhanova-4a7766269'>
                <img src='./media/Linkedin.png' alt='linkedin'/>
            </a>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
