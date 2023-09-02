import { work_data } from "../../Datas"
import s from "./WorksPage.module.css"

function WorksPage() {
  return (
    <div>
      <div className={s.content}>
        <h1 className={s.darkBlue}>Work</h1>
        <div>
            <div className={s.work}>
                <img className={s.img} src='./media/works1.png' alt="mainImg"/>
                <div>
                    <h2 className={s.darkBlue}>{work_data[0].title}</h2>
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
                    <h2 className={s.darkBlue}>{work_data[1].title}</h2>
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
                    <h2 className={s.darkBlue}>{work_data[2].title}</h2>
                    <div className={s.yearNtags}>
                        <p className={s.year}>{work_data[2].year}</p>
                        <p className={s.tags}>{work_data[2].tags?.[0]}</p>
                    </div>
                    <p>{work_data[2].text}</p> 
                 </div>
            </div>

            <div className={s.work}>
                <img className={s.img} src='./media/works4.png' alt="mainImg"/>
                <div>
                    <h2 className={s.darkBlue}>{work_data[3].title}</h2>
                    <div className={s.yearNtags}>
                        <p className={s.year}>{work_data[3].year}</p>
                        <p className={s.tags}>{work_data[3].tags?.[0]}</p>
                    </div>
                    <p>{work_data[3].text}</p> 
                 </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WorksPage
