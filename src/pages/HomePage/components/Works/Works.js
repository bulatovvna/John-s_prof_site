import { work_data } from "../../../../Datas"
import s from "./Works.module.css"

function Works() {
  return (
    <div>
      <div className={s.content}>
        <p>Featured works</p>
        <div>
            <div className={s.work}>
                <img className={s.img} src='./media/works1.png' alt="mainImg"/>
                <div>
                    <h2>{work_data[0].title}</h2>
                    <div className={s.yearNtags}>
                        <p className={s.year}>{work_data[0].year}</p>
                        <p className={s.tags}>{work_data[0].tags?.[0]}</p>
                    </div>
                    <p>{work_data[0].text}</p> 
                 </div>
            </div>

            <div className={s.work}>
                <img className={s.img} src='./media/works2.png' alt="mainImg"/>
                <div>
                    <h2>{work_data[1].title}</h2>
                    <div className={s.yearNtags}>
                        <p className={s.year}>{work_data[1].year}</p>
                        <p className={s.tags}>{work_data[1].tags?.[0]}</p>
                    </div>
                    <p>{work_data[1].text}</p> 
                 </div>
            </div>

            <div className={s.work}>
                <img className={s.img} src='./media/works3.png' alt="mainImg"/>
                <div>
                    <h2>{work_data[2].title}</h2>
                    <div className={s.yearNtags}>
                        <p className={s.year}>{work_data[2].year}</p>
                        <p className={s.tags}>{work_data[2].tags?.[0]}</p>
                    </div>
                    <p>{work_data[2].text}</p> 
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Works
