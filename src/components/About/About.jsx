import style from './index.module.css'

export default function About(){
 

    return (
        <div className={style.container}>
            <div className={style.title}>
            <h2>About Me</h2>
          </div>
          <div className={style.aboutContent}>
          <div className={style.row}>
              <div className={style.aboutText}>
                <h3>
                  &lt;Arce Daniel /&gt;
                  <br/>
                  <span>&lt;Full Stack Web Developer /&gt;</span>
                </h3>
                <p>
                    I am a Fullstack Web Developer with an affinity for the backend...
                    <br />
                    But apart from programming, I enjoy reading and researching different topics, related to music, psychology, economics and powerlifting.
                    <br />
                    I consider myself an organized person, who solves problems effectively, independently, with a very good sense of humor and detail. I like to know new places and as a last detail I love cooking.
                    <br />
                    I like to participate in group projects with positive people who bring value and pleasant experiences.
                </p>
              </div>
            </div>
        </div>
        <div className={style.homeIcons}>
          <a href='https://www.linkedin.com/in/jonathandanielarce/' 
          className={style.iconLikedin}></a>
          <a href='https://github.com/ArceDaniel' className={style.iconGit}></a>
          <a href='https://drive.google.com/file/d/1ycoq0ugHetDNITxGOzchjHLUI2DYPBJp/view?usp=share_link' download className={style.iconCv}></a>
          </div>
    </div>
    )
}