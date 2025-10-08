
import { useState, createElement } from "react"
import data from "../components/Assessments/assessments-complete.json"

export default function Assessments() {
    
    const [courseCount, setCourseCount] = useState(10)
    console.log(data)

    function showAllCouses() {
        setCourseCount(data.length)
    }

    function showLessCouses() {
        setCourseCount(10)
    }

    function dateString(str) {
        const [day, month, year, ...time] = str.split(' ')
        const date = `${day} ${month} ${year}`
        time.join('')
        return {
            date,
            time
        }
    }
    
    return (
        <section id="assessments">
            <h2>Assessment details</h2>
            <main className="assessment-container">
                <div className="heading">
                    <div className="title">Title</div>
                    <div>Status</div>
                    <div>Open Date</div>
                    <div>Due Date</div>
                </div>
                {data.slice(0,courseCount).map((course, index) => 
                <div key={index} className={index % 2 === 1 ? "row grey" : "row"}>
                    <div className="title">
                        { course.ASSIGNMENT_LMS_LINK ?
                        <a href={course.ASSIGNMENT_LMS_LINK} target="_blank">
                            {course.ASSIGNMENT_NAME} 
                            <i style={{marginLeft:'10px'}} className="fa">&#xf08e;</i>
                        </a> : 
                        <span>{course.ASSIGNMENT_NAME}</span> 
                        }
                    </div>
                    <div style={{textTransform:"capitalize"}}>{course.ASSIGNMENT_STATUS_DESC.toLowerCase()}</div>
                    <div>{dateString(course.ASSIGNMENT_OPEN_DATE).date}<br />{dateString(course.ASSIGNMENT_OPEN_DATE).time}</div>
                    <div>{dateString(course.ASSIGNMENT_DUE_DATE).date}<br />{dateString(course.ASSIGNMENT_DUE_DATE).time}</div>
                </div>
                )}
            </main>
            {courseCount <= 10 ? <button onClick={showAllCouses}>Show all</button> : <button onClick={showLessCouses}>Show less</button>}
        </section>
    )
}