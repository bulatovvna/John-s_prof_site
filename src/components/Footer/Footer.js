import s from "./Footer.module.css"

function Footer() {
  return (
    <div>
      <div className={s.content}>
        <div className={s.links}>
            <a href='#'>
                <img src='./media/fb.png' alt='facebook'/>
            </a>
            <a href='#'>
                <img src='./media/insta.png' alt='instagram'/>
            </a>
            <a href='#'>
                <img src='./media/Group.png' alt='twitter'/>
            </a>
            <a href='#'>
                <img src='./media/Linkedin.png' alt='linkedin'/>
            </a>
        </div>
        <p>Copyright ©2020 All rights reserved </p>
      </div>
    </div>
  )
}

export default Footer
