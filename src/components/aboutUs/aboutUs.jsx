import React from 'react'
import Navigation from "../navigation/navigation"
import mission from "../../images/mission-img.jpg"
import vision from "../../images/vision-img.jpg"
import team from "../../images/team-img.jpg"
import "./aboutUs.css"

function aboutUs() {
    return (
        <div>
            <Navigation />
            <div className="about_container">
                <div className="mission">
                    <div className="mission-pic">
                        <img className='container-imgs' src={mission} alt="" />
                    </div>
                    <div className="mission-content">
                        <h1>Our Mission</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias maiores cumque quibusdam omnis veniam beatae facere delectus nihil illo quisquam, laudantium, earum odio optio incidunt ex tempora? Cupiditate maxime quia quos voluptatem dolorem at, et eos rerum possimus dolorum ea qui sequi sed asperiores quae eligendi impedit optio, natus est.
                    </div>
                </div>
                <div className="vision">
                    <div className="vision-content">
                        <h1>Our Vision</h1>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea aspernatur modi eligendi laborum tempora omnis est nam. Inventore quibusdam odio explicabo numquam eius temporibus officiis modi adipisci perferendis animi error impedit itaque exercitationem earum velit, assumenda voluptate culpa molestiae totam iste magni facilis accusamus. Quibusdam ipsa numquam consequuntur ea officia?
                    </div>
                    <div className="vision-pic">
                        <img className='container-imgs' src={vision} alt="" />
                    </div>
                </div>
                <div className="team">
                    <div className="team-pic">
                        <img className='container-imgs' src={team} alt="" />
                    </div>
                    <div className="team-content">
                        <h1>Team</h1>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse est necessitatibus, facere minus quam exercitationem ducimus cumque excepturi aspernatur? Dolor nihil nulla vel maiores sint saepe optio sapiente atque rerum tempora numquam quia doloribus possimus molestias, at dicta accusamus voluptates, quis aperiam minus. Sunt, quae obcaecati. Accusamus quam eius aliquid!
                    </div>
                </div>
            </div>
            <div className="faq_container">
                <h1>Faqs</h1>
                <div className="question1">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
                <div className="question2">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
                <div className="question3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
                <div className="question4">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
                <div className="question5">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
                <div className="question6">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod, at.
                </div>
            </div>
        </div>
    )
}

export default aboutUs